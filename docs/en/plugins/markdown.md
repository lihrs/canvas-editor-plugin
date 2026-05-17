# Markdown

Markdown import and export plugin.

## Installation

```bash
npm install @hufe921/canvas-editor-plugin-markdown
```

## Usage

```javascript
import Editor from '@hufe921/canvas-editor'
import markdownPlugin from '@hufe921/canvas-editor-plugin-markdown'

const instance = new Editor()
instance.use(markdownPlugin)

// Export markdown
const markdown = instance.command.executeExportMarkdown()

// Import markdown
instance.command.executeImportMarkdown({
  value: '# Hello World\n\nThis is a **bold** text.'
})
```

## Parameters

### executeImportMarkdown

| Parameter | Type | Description |
|-----------|------|-------------|
| value | string | Markdown string |

### executeExportMarkdown

No parameters. Returns the Markdown string of the current document content.

## Example

```javascript
// Export
const markdown = instance.command.executeExportMarkdown()
console.log(markdown)

// Import
instance.command.executeImportMarkdown({
  value: `# Title

- List item 1
- List item 2

**Bold text**

| Table | Column 2 |
|-------|----------|
| Cell 1 | Cell 2 |`
})
```
