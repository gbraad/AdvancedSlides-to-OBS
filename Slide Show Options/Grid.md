[Grid Component — Advanced Slides Documentation (mszturc.github.io)](https://mszturc.github.io/obsidian-advanced-slides/layout/grid/)

[border-radius - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)

```
<grid drag="28 75" drop="69 15" bg="white" style="border-radius:15px"/>
```

```
<grid drag="width height" drop="x y">
```

#### Background
```
<grid  drag="width height" drop="x y" bg="color">
```


```md
<grid  drag="40 100" drop="center" bg="coral" flow="col">
Heading
![[Image.jpg]]
**Lorem Ipsum** is simply dummy text
</grid>
```

```md
<grid  drag="100 40" drop="center" bg="coral" flow="row">
Left
![[Image.jpg]]
**Lorem Ipsum** is simply dummy text
</grid>
```

#### Animation
```
<grid  drag="width height" drop="x y" animate="type speed">
```

-   fadeIn
-   fadeOut
-   slideRightIn
-   slideLeftIn
-   slideUpIn
-   slideDownIn
-   slideRightOut
-   slideLeftOut
-   slideUpOut
-   slideDownOut
-   scaleUp
-   scaleUpOut
-   scaleDown
-   scaleDownOut

#### Filter
```
<grid  drag="width height" drop="x y" filter="effect">
```

-   blur
-   bright
-   contrast
-   grayscale
-   hue
-   invert
-   saturate
-   sepia

```md
<grid  drag="50 50" drop="-12 -25" bg="white" filter="grayscale()">
![[Image.jpg]]
</grid>

Text is too blurry <!-- element drag="30 25" drop="5 15" bg="#B565A7" filter="blur(10px)" -->
```


#### Rotate

```
<grid  drag="width height" drop="x y" rotate="deg">
```

#### Justify
```
<grid  drag="width height" drop="x y" justify-content="type">
```

-   start
-   center
-   space-between
-   space-around
-   space-evenly (default)
-   end


