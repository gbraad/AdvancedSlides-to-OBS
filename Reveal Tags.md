## Presentation Options
### Presentation Options should be added to the first slide.

When changing scenes in OBS, go to the Slide with the same name? default true; true / false
```html
<!-- .slide: data-on-obs-scene-change= true -->
```

On showing the overview mode change OBS scene.  Only use this option to change scenes when showing the overview mode.   
```HTML
<!-- .slide: data-overview-shown= "scene name" -->
```

On hiding to overview mode change OBS scene. Only use this option to change scenes when showing the overview mode.  
<!-- .slide: data-overview-shown= "scene name" -->

## Slide Options
### Slide Options should be added to each slide that triggers an OBS scene change

<!-- .slide: data-changed="scene name" -->
<!-- .slide: data-Transitioned="scene name" -->

## Fragment Options

<!-- .slide: data-fragment-shown="scene name" -->
<!-- .slide: data-fragment-hidden="scene name" -->
