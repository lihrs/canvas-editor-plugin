import Editor from '@hufe921/canvas-editor'
import markdownPlugin from './markdown/index'

const editor = new Editor(document.querySelector<HTMLDivElement>('#editor')!, {
  main: [
    {
      value: 'Markdown Plugin'
    }
  ]
})

markdownPlugin(editor)

const textarea = document.querySelector<HTMLTextAreaElement>('#markdown-input')!

document
  .querySelector<HTMLButtonElement>('#btn-to-editor')!
  .addEventListener('click', () => {
    const value = textarea.value.trim()
    if (value) {
      editor.command.executeImportMarkdown({ value })
    }
  })

document
  .querySelector<HTMLButtonElement>('#btn-to-markdown')!
  .addEventListener('click', () => {
    textarea.value = editor.command.executeExportMarkdown()
  })
