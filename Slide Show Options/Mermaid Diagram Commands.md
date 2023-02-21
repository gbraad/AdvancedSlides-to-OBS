CSS Snippet for diagram sizing.  Enter Mermaid diagram inside a grid tag.
```html
<grid drag="50 50" drop="0 15" bg="transparent" style="border-radius:15px">
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
       
```<!-- element data-diagram-width="200" -->
</grid>
```


---
themeVariables:
    fontSize: 32px
theme: beige
highlightTheme: css/vs2015.css
---

```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
    ```
```

````md
---
theme: beige
highlightTheme: css/vs2015.css
---

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
````

