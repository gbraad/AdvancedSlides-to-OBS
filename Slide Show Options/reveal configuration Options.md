
[[reveal]] options are set in YAML frontmatter

### My reveal config 
```yaml
---
title: new title
margin: 0
width: 1280
height: 720
navigationMode: 'linear'
controls: true
controlslayout: edges
cssclass: "HideEmbedHeader"
autoSlideStoppable: false
transition: none
bg: transparent
---

```

### Navigation Options
```javascript
 // Changes the behavior of our navigation directions.  
 //  
 // "default"  
 // Left/right arrow keys step between horizontal slides, up/down  
 // arrow keys step between vertical slides. Space key steps through  
 // all slides (both horizontal and vertical).  
 //  
 // "linear"  
 // Removes the up/down arrows. Left/right arrows step through all  
 // slides (both horizontal and vertical).  
 //  
 // "grid"  
 // When this is enabled, stepping left/right from a vertical stack  
 // to an adjacent vertical stack will land you at the same vertical  
 // index.  
 //  
 // Consider a deck with six slides ordered in two vertical stacks:  
 // 1.1    2.1  
 // 1.2    2.2  
 // 1.3    2.3  
 //  
 // If you're on slide 1.3 and navigate right, you will normally move  
 // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you  
 // from 1.3 -> 2.3.  
 navigationMode: 'default',
```

### Transition Options
```javascript
  // Transition style  
  transition: 'slide' // none/fade/slide/convex/concave/zoom
```

