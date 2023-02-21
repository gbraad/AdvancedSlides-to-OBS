CSS snippets can change the apperace of Obsidian.  

### Custom note icon

```css
.workspace-tab-header[aria-label^="Obsidian"]
> .workspace-tab-header-inner
> .workspace-tab-header-inner-icon
> .svg-icon.lucide-file{
    display: none;
}

.workspace-tab-header[aria-label^="Obsidian"]
> .workspace-tab-header-inner
> .workspace-tab-header-inner-icon{
    background-image: url("data:image/svg+xml;base64,");
    background-size: 30px 30px; /* adopt this to your file tree font height */
    transform: translate(-5px, 5px); /* to position the icon */
    background-repeat: no-repeat;
    display: flex;
    height: 30px;
    width: 30px;
    margin: -10px -10px 0 0;
```
Change the "aria-label" and the background image
[How to set the icon for a note on right side bar - Help - Obsidian Forum](https://forum.obsidian.md/t/how-to-set-the-icon-for-a-note-on-right-side-bar/18004)


[Sidebars icons file - Share & showcase - Obsidian Forum](https://forum.obsidian.md/t/sidebars-icons-file/46684/2)

https://openmoji.org/
Emoji Icons as SVGs

[Full Emoji List, v15.0 (unicode.org)](https://unicode.org/emoji/charts/full-emoji-list.html)

[Lucide](https://lucide.dev/)

