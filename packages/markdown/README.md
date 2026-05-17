<h1 align="center">canvas-editor-plugin-markdown</h1>

<p align="center">markdown plugin for canvas-editor</p>

## usage

```bash
npm i @hufe921/canvas-editor-plugin-markdown --save
```

```javascript
import Editor from "@hufe921/canvas-editor"
import markdownPlugin from "@hufe921/canvas-editor-plugin-markdown"

const instance = new Editor()
instance.use(markdownPlugin)

// export markdown
const markdown = instance.command.executeExportMarkdown()

// import markdown
instance.command.executeImportMarkdown({
  value: '# Hello World\n\nThis is a **bold** text.'
})
```
