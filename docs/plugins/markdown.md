# Markdown

Markdown 导入导出插件。

## 安装

```bash
npm install @hufe921/canvas-editor-plugin-markdown
```

## 使用

```javascript
import Editor from '@hufe921/canvas-editor'
import markdownPlugin from '@hufe921/canvas-editor-plugin-markdown'

const instance = new Editor()
instance.use(markdownPlugin)

// 导出 markdown
const markdown = instance.command.executeExportMarkdown()

// 导入 markdown
instance.command.executeImportMarkdown({
  value: '# Hello World\n\nThis is a **bold** text.'
})
```

## 参数

### executeImportMarkdown

| 参数 | 类型 | 说明 |
|------|------|------|
| value | string | Markdown 字符串 |

### executeExportMarkdown

无参数，返回当前文档内容的 Markdown 字符串。

## 示例

```javascript
// 导出
const markdown = instance.command.executeExportMarkdown()
console.log(markdown)

// 导入
instance.command.executeImportMarkdown({
  value: `# 标题

- 列表项 1
- 列表项 2

**加粗文本**

| 表格 | 列2 |
|------|-----|
| 单元格1 | 单元格2 |`
})
```
