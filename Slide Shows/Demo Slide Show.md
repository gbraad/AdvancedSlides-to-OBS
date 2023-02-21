---
title: Slide and Scene Changer
margin: .04
width: 1280
height: 720
navigationMode: 'linear'
controls: false
controlsLayout: 'bottom-right'
transition: none
bg: transparent
---
<grid drag="0 0" />

---

<!-- .slide: data-on-obs-scene-change= "true" -->
<!-- .slide: data-overview-shown= "Scene 3" -->

<!-- .slide: data-slide-name="Scene 1" -->
<!-- .slide: data-slide-changed="Scene 1" -->

<div>
Obsidian 
Advanced Slides <br>
to
<br> OBS 
</div>
<!-- element class="r-fit-text" -->

(scene 1)

---

<!-- .slide: data-slide-changed="Scene 2" -->
<!-- slide bg="rgba(0,0,0,.99)" -->
What is Obsidian?<bR>
![[Obsidian_software_logo.svg|200]]
<!-- element class="r-fit-text" -->


--

<!-- slide data-transition="none" -->
<!-- .slide: data-slide-changed="Scene 1" -->

![[Research.svg]]
--
<!-- .slide: data-slide-changed="Scene 1" -->

![[Organize.svg]]
--
<!-- .slide: data-slide-changed="Scene 1" -->
![[Analyse.svg]]
--
<!-- .slide: data-slide-changed="Scene 1" -->
![[Display.svg]]
--

<!-- .slide: data-slide-changed="Scene 1" -->
![[Share.svg]]

---
<!-- .slide: data-slide-changed="Scene 1" -->
# OBS<br>
![[OBS_Studio_Logo.svg|400]]



---
<!-- .slide: data-slide-changed="Scene 1" -->

<grid drag="75 75" drop="15 15" bg="rgba(255, 255, 255, 0.5)" style="border-radius:15px">
![[OBSsidian to OBS.svg]]
</grid>

---
<!-- slide data-transition="fade-in slide-out" -->
<!-- slide bg="black" -->
<!-- .slide: data-slide-changed="Scene 2" -->
# OBS Slide Commands
(scene 2)

---

<!-- slide data-transition="zoom-in slide-out" -->
<!-- .slide: data-slide-name="Scene 1" -->
<!-- .slide: data-slide-changed="Scene 1" -->


## Change Scenes when the slide transition starts 

```
<!-- .slide: data-slide-changed="Scene 1" -->
```

--

<!-- .slide: data-slide-transitioned="Scene 2" -->
<!-- slide data-transition="zoom" -->

## Change Scenes when the slide transition ends 
```
<!-- .slide: data-slide-transitioned="scene 2" -->
```
  
---

<!-- .slide: data-slide-changed="Scene 1" -->


Fragment 1 Fade in <!-- element class="fragment" -->

Fragment 2 Transition to Scene 2 Fade Out<!-- element class="fragment fade-out" data-fragment-shown="Scene 2" -->

Fragment 3 Transition to Scene 3, Highlight Red <!-- element class="fragment highlight-red" -->

<!-- element class data-fragment-shown="Scene 3" -->

Fragment Fade in, then out <!-- element class="fragment fade-in-then-out" -->
 
Fragment Slide up while fading in <!-- element class="fragment fade-up" -->

---

<!-- .slide: data-slide-changed="Scene 2" -->

# Callouts

> [!example]
> Here is an Example for an Callout in a Slide. Callouts support dark and white backgrounds and could be sized by annotations
  
---

<!-- .slide: data-transition="zoom-in slide-out" -->
<!-- .slide: data-slide-changed="Scene 1" -->

#### Gitgraph

Diagrams support

  

<grid drag="50 50" drop="-62 35" bg="transparent" style="border-radius:15px">

```mermaid

    gitGraph

       commit

       commit

       branch develop

       checkout develop

       commit

       commit

       checkout main

       merge develop

       commit

       commit

```

<!-- element data-diagram-width="250" -->

</grid>

---

<!-- .slide: data-slide-changed="Scene 1" -->
:smile:
<!-- element class="r-fit-text" -->

  
---