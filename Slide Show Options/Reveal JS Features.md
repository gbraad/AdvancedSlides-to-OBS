
[[Reveal JS]] formatting code
https://mszturc.github.io/obsidian-advanced-slides/basic-syntax/

#### Text formatting
<!-- element class="r-fit-text" -->

```html
class="r-stack"
```
stack elements on top of eeach other

The `r-stretch` layout helper lets you resize an element, like an image or video, to cover the remaining vertical space in a slide.

#### Auto-Animate
Animates across slides
<!-- .slide: data-auto-animate -->
[Auto-Animate | reveal.js (revealjs.com)](https://revealjs.com/auto-animate/)

#### Code blocks
````md
```js [1-2|3|4]
    let a = 1;
    let b = 2;
    let c = x => 1 + 2 + x;
    c(3);
    ```
````

### Transitions

none, fade, cross fade,slide, convex, concave, zoom

```html
<!-- .slide: data-transition="zoom" -->
```

```html
fade-in slide-out
```

data-background-transition