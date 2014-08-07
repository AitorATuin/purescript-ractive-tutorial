module Tutorial.Ractive.Demo where

import Control.Monad.Eff
import qualified Control.Monad.Eff.Ractive as Ract
import Debug.Trace
import Control.Apply ((*>),(<*))
import Control.Bind ((>=>))
import Control.Monad.Trans
import Control.Monad.Cont.Trans
import Data.Maybe
import Data.Map (lookup, keys)
import Network.HTTP
import Network.XHR
import Tutorial.Ractive
import Data.Array (filter, map)
import Data.String (fromCharCode)
import Data.DOM.Simple.Window (globalWindow, document)
import Data.DOM.Simple.Element (querySelector, classToggle)
import Data.DOM.Simple.Events (addEventListener)
import Data.DOM.Simple.Document
import qualified Data.DOM.Simple.Types as DT

tutorialPartials :: Template -> Template -> TutorialPartials
tutorialPartials output content = {outputP: output, contentP: content}

type TutorialConfig = {
  contentTemplate :: URI,
  outputTemplate :: URI,
  element :: String,
  template :: String}

template :: String -> String -> URI -> URI -> TutorialConfig
template element template baseUri dir = {contentTemplate: content, outputTemplate: output, element: element, template: template}
  where
    content = baseUri ++ "/" ++ dir ++ "/" ++ "content.html"
    output  = baseUri ++ "/" ++ dir ++ "/" ++ "output.html"

templateTuto :: URI -> TutorialConfig
templateTuto = template ractiveElement ractiveTemplate "templates"

templateTuto1 :: TutorialConfig
templateTuto1 = templateTuto "tut1"

getFrom :: forall r. URI -> (RequestConfig r -> EffXHR r Unit)
getFrom url = (flip $ flip get url) {}

getTemplate :: forall e a b. (String -> a -> b) -> URI -> a -> ContT Unit (Eff (xhr::XHR | e)) b
getTemplate fun uri = \v ->
  ContT \next -> do
    getFrom uri $ defaultConfig {onLoadEnd = \response -> next $ fun (responseText response) v}

outputPartialTut :: forall e. URI -> Unit -> ContT Unit (Eff (xhr::XHR | e)) (String -> TutorialPartials)
outputPartialTut = getTemplate \tmpl ->
  \_ -> tutorialPartials tmpl

contentPartialTut :: forall e. URI -> (String -> TutorialPartials) -> ContT Unit (Eff (xhr::XHR | e)) TutorialPartials
contentPartialTut = getTemplate \tmpl ->
  \fun -> fun tmpl

loadTutorial :: forall e. TutorialConfig -> Unit -> ContT Unit (Eff (ractiveM::Ract.RactiveM,xhr::XHR | e)) TutorialPartials
loadTutorial config = outputPartialTut config.outputTemplate >=>
  contentPartialTut config.contentTemplate

setOutputCloseButton :: forall e. Unit -> ContT Unit (Eff (trace::Trace,dom::DT.DOM|e)) Unit
setOutputCloseButton = \_ -> ContT \_ -> do
  doc <- document globalWindow
  closeOutputBtn <- querySelector "#output-btn-close" doc
  outputPanel <- querySelector "#output" doc
  flip (addEventListener "click") closeOutputBtn \ev -> do
    classToggle "hidden" outputPanel
    trace "Cerrando ventana!"

launch :: forall e. Tutorial Unit (xhr :: XHR, trace :: Trace, ractiveM :: Ract.RactiveM, dom :: DT.DOM | e) -> Eff (xhr :: XHR, trace :: Trace, ractiveM :: Ract.RactiveM, dom::DT.DOM| e) Unit
launch (Tutorial name tutorialF) = runContT (executeTutorial unit) $ \r ->
  trace "DONE"
  where
    executeTutorial = loadTutorial (templateTuto name) >=> tutorialF >=> setOutputCloseButton

initTutorials tutorials = do
  r <- Ract.ractive "#ractive-nav-template" "ractive-nav" {tutorials:(\x -> {name: fromCharCode <$> (filter onlyNums $ toChars x)}) <$> keys tutorials}
  flip (Ract.on "loadtutorial") r $ \r ev -> do
    (launch $ fromMaybe errorTutorial $ flip lookup tutorials $ "tut" ++ ev.context.name)
    trace "onLoadTutorial!"
  trace "Initialization done"
    where
      errorTutorial = Tutorial "error" (\_ -> ContT \_ -> trace "ERROR loading tutorial")
      onlyNums n = if (n >= 48 && n <= 57) then true else false

main = initTutorials mapOfTutorials
