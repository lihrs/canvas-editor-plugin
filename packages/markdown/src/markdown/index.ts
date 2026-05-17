import Editor from '@hufe921/canvas-editor'
import exportMarkdown from './exportMarkdown'
import importMarkdown from './importMarkdown'

export default function markdownPlugin(editor: Editor) {
  const command = editor.command
  // 导出 Markdown
  command.executeExportMarkdown = exportMarkdown(command)
  // 导入 Markdown
  command.executeImportMarkdown = importMarkdown(command)
}
