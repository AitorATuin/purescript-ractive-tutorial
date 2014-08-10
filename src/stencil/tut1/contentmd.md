# First steps with PureScript and Ractive
---

In this tutorial we are going to see the most basic and straightforward use of `purescript-ractive`, we are going to use it
just to put some content in our page.

The content we want to show is this astounding greet:

```html
<h2 class="hello">Hej, hej Värld!</h2>
```

It's just a H2 header with some greeting message (in Swedish ;)

The **purescript** snippet to do this is the following:

```haskell
import Control.Eff.Ractive

main :: Eff (ractiveM :: RactiveM) Unit
main = ractive "template" "#document" {}
```

<button class="btn btn-primary" on-click="run1">run</button>

### The code in more detail!
---

There is not very much to explain here but anyway let's take a look to the small code involved.

Firstly we load the module with ```import Control.Eff.Ractive```, this will allow us to have all the functions defined in **Ractive** module in scope,
ready to be used.

Secondly we define the **main** function, this function creates a new **Ractive** object which is ready to be used.
To create it we pass three arguments to the _ractive_ function, the ractive function is defined in ```Control.Eff.Ractive``` and has this
signature:

```haskell
ractive :: forall a eff. String -> String -> a -> Eff (ractiveM :: RactiveM | eff)
```

To create it we pass three arguments to the _ractive_ function, the *first one is the template we want to use* (our nice greeting here),
the *second one is the element* where we want to show the message (all the element's children will be replaced!) and *finally an object
with the data* we want to bind (more on this later.)

>Please note that creating an object is a side-effect, so not allowed in a pure functional language like **PureScript**,
that's the reason why _ractive_ function returns an *Eff monad*.
See this [post](http://www.purescript.org/posts/Eff-Monad/ "Handling Native Effects with the Eff Monad") for a more detailed explanation about
the *Eff* monad in *PureScript*.

### Summary
---

Let's see the only function we have used here: _ractive_ and its signature (we are now functional programmers so we really care about types!)

```haskell
ractive :: forall a eff. String -> String -> a -> Eff (ractiveM :: RactiveM | eff) Ractive
```
