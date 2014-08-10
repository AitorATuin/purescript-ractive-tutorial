# Tunning our great message to the world!

---

We are cool enough, we can show a nice greeting to everyone, but it would be nicer if spanish people could understand us when being polite.

That's what we are going to do now, we are going to change the content of our message.

### Creating a dynamic template and filling it with some data

The first thing to do is to change our beautiful but static template with something like this:

{{=<% %>=}}
```html
<h2 class="hello">{{greeting}} {{name}}</h2>
```
<%={{ }}=%>

Good! We have created two mustache delimiters which will be binded to the data in our ractive object.

Lets use this template to show our old but remarkable message first.

The **PureScript** snippet to do this is the following:

```javascript
import Control.Eff.Ractive

main :: Eff (ractiveM :: RactiveM) Unit
main = ractive "template" "#document" {greeting: "Hej, hej", name: "Värld!"}
```

<button class="btn btn-primary" on-click="run1">run</button>


Ok, now we have the same behavior than before but being dynamic, we have created a new *Ractive* object and we set the value of our
two mustache delimiters (_name_ and _gretting_). So we have (at this point) the same behavior than in the previous tutorial but with the
improvement that we can easily change the contents of any of the mustaches in the template.

### Change the data in our template

Let's see how to change the data binded in the template.

We want now to show a greeting message understandable for spanish people, so let's change the contents of our *Ractive's Data*.

```haskell
changeGreeting :: Ractive -> Eff (ractiveM :: RactiveM) Unit
changeGreeting ractive = do
  set "greeting" "Hola" ractive
  set "name" "Mundo" ractive
```

That function gets a __Ractive__ instance and sets new values `greeting` and `name`.

Try to run that function!

<button class="btn btn-primary" on-click="run2">run</button>

Nice! We can change now the contents, but we are allow also to change the style of our templates, let's do that.

First, we need to change the template to something like this:

{{=<% %>=}}
```html
<h2 style='color: {{color}}; font-size: {{size}}em; font-family: {{font}};'>
  {{greeting}} {{name}}!
</h2>
```
<%={{ }}=%>

and then we can change the value of those mustaches styling the text as normal:

```haskell
changeStyle :: Ractive -> Eff (ractiveM :: RactiveM) Unit
changeStyle ractive = do
  set "color" "purple" ractive
  set "font" "Georgia" ractive
  set "size" 4 ractive
```

<button class="btn btn-primary" on-click="run3">run</button>

---

Ok, now we know one more function to use with our *Ractive* objects:

```haskell
set :: forall a eff. String -> a -> Ractive -> Eff (ractiveM::RactiveM | e) Unit
```

Setting a new data value is also computation with side-effects so we get an *Eff* monad when running the ```set``` function.

The *first parameter* (```String```) is the property (or field) in our *Ractive's Data* that we want to set.

The *second parameter* is the value we want to set to the property.

### Summary

Now we know two functions:

```haskell
ractive :: forall a eff. String -> String -> a -> Eff (ractiveM :: RactiveM | eff) Ractive
```

```haskell
set :: forall a eff. String -> a -> Eff (ractiveM :: RactiveM | eff) Unit
```
