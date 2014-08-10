module Tutorial.Ractive where

import Debug.Trace
import Control.Monad.Cont.Trans
import Control.Monad.Eff
import Control.Monad.Eff.Ractive
import Data.Tuple (zip,Tuple(..))
import Data.Array (range, length, map)
import qualified Data.Map as M
import Data.Maybe
import qualified Data.String (length, charCodeAt) as S
import Data.DOM.Simple.Window (globalWindow, document)
import Data.DOM.Simple.Element (querySelector, classRemove)
import qualified Data.DOM.Simple.Types as DT
import Data.DOM.Simple.Document

toChars :: String -> [Number]
toChars str = _toChars (S.length str) str []
  where
    _toChars :: Number -> String -> [Number] -> [Number]
    _toChars 0 _ xs = xs
    _toChars n str xs = _toChars (n-1) str ((S.charCodeAt (n-1) str):xs)

data Hook e = Hook String (Ractive -> Event -> Eff e Unit)

type TutorialData e = {name :: String,
  hooks :: [Hook e]}


type Template = String

type EffectsTutorial = (trace::Trace,dom::DT.DOM,ractiveM::RactiveM)
type EffTutorial = Eff EffectsTutorial Unit
type HookTutorial = Hook EffectsTutorial
type Tutorial = TutorialData EffectsTutorial

-- Tutorial 1
tutorial1Run1 r event = returnE unit

tutorial1 = {name: "tut1", hooks: [Hook "run1" tutorial1Run1]}

-- Tutorial 2
tutorial2Run1 r event = do
  set "name" "Värld" r
  set "greetings" "Hej, hej" r

tutorial2Run2 r event = do
  set "name" "Mundo" r
  set "greetings" "Hola" r

tutorial2 = {name: "tut2", hooks: [Hook "run1" tutorial2Run1, Hook "run2" tutorial2Run1 >> tutorial2Run2]}

listOfTutorials :: [Tutorial]
listOfTutorials = [tutorial1,tutorial2]
mapOfTutorials :: M.Map String Tutorial
mapOfTutorials = M.fromList $ tutName <$> listOfTutorials
  where
  --  tutName :: forall e. Tutorial e -> Tuple String (Tutorial e)
    tutName tutorial = Tuple tutorial.name tutorial
