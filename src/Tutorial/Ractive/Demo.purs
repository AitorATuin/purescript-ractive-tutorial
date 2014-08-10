module Tutorial.Ractive.Demo where

import Control.Monad.Eff
import qualified Control.Monad.Eff.Ractive as Ract
import Debug.Trace
import Control.Apply ((*>),(<*))
import Control.Bind ((>=>))
import Control.Monad.Trans
import Control.Monad.Cont.Trans
import Data.Maybe
import Data.Map (lookup, keys, Map(..))
import Network.HTTP
import Network.XHR
import Tutorial.Ractive
import Data.Array (filter, map)
import Data.String (fromCharCode)
import Data.DOM.Simple.Window (globalWindow, document)
import Data.DOM.Simple.Element (querySelector, classAdd, classRemove)
import Data.DOM.Simple.Events (addEventListener)
import Data.DOM.Simple.Document
import Data.Traversable
import qualified Data.DOM.Simple.Types as DT

tutorialPartials :: Template -> Template -> TutorialPartials
tutorialPartials output content = {outputP: output, contentP: content}

type TutorialConfig = {
  contentTemplate :: URI,
  outputTemplate :: URI,
  element :: String,
  template :: String}

type TutorialPartials = {
  outputP  :: Template,
  contentP :: Template}

ractiveTemplate = "#ractive-template"
ractiveElement = "ractive-element"

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

-- TODO: Manage error in closeOutputBtn.
setOutputCloseButton :: forall e. Unit -> ContT Unit (Eff (trace::Trace,dom::DT.DOM|e)) Unit
setOutputCloseButton = \_ -> ContT \_ -> do
  doc <- document globalWindow
  closeOutputBtn <- querySelector "#output-btn-close" doc
  outputPanel <- querySelector "#output" doc
  fromMaybe errorCloseEvent $ pure addCloseEvent <*> closeOutputBtn <*> outputPanel
  where
    addCloseEvent btn panel = flip (addEventListener "click") btn \ev -> do
      classAdd "hidden" panel
    errorCloseEvent = do
      trace "setOutputCloseButton::Error setting `close` event for output panel close button."
      trace "One or both selectors failed!"

prepareTutorial :: forall e. TutorialPartials -> Ract.Ractive -> [HookTutorial] -> Eff (ractiveM::Ract.RactiveM|e) [Ract.Ractive]
prepareTutorial partials ractive hooks = traverse (\(Hook event fn) -> Ract.on event (wrapperFn fn) ractive) hooks
  where
    wrapperFn fn = \r ev -> do
      doc <- document globalWindow
      panel <- querySelector "#output" doc
      fromMaybe (trace "Error") $ Just (classRemove "hidden") <*> panel
      fn r ev

launch :: forall e. Tutorial -> Eff (xhr :: XHR, trace :: Trace, ractiveM :: Ract.RactiveM, dom::DT.DOM| e) Unit
launch tutorial = runContT (executeTutorial unit) $ \r ->
  trace "DONE"
  where
    executeTutorial = loadTutorial (templateTuto tutorial.name) >=> createRactive >=> setOutputCloseButton
    createRactive partials = ContT \next -> do
      r <- Ract.ractiveFromData {template:ractiveTemplate, el:ractiveElement, partials:partials, "data":{}}
      prepareTutorial partials r tutorial.hooks
      Ract.set "showOutput" false r
      Ract.setPartial "outputP" partials.outputP r
      Ract.set "showOutput" true r
      next unit

initTutorials :: forall e. Map String Tutorial -> Eff (ractiveM::Ract.RactiveM,trace::Trace,dom::DT.DOM|e) Unit
initTutorials tutorials = do
  r <- Ract.ractive "#ractive-nav-template" "ractive-nav" {tutorials:(\x -> {name: fromCharCode <$> (filter onlyNums $ toChars x)}) <$> keys tutorials}
  flip (Ract.on "loadtutorial") r $ \r ev -> do
    let tutorial = (flip lookup tutorials $ "tut" ++ ev.context.name)
    fromMaybe (trace "Error loading tutorial") $ launch <$> tutorial -- >>= (\t -> Just $ launch t)
  trace "Initialization done"
    where
      onlyNums n = if (n >= 48 && n <= 57) then true else false

--main :: Eff (trace :: Trace, ractiveM :: Ract.RactiveM,dom::DT.DOM) Unit
main = initTutorials mapOfTutorials
