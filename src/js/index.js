import Editor from './editor.js'

const editor = new Editor()

editor.init()

editor.addBlock(
  editor.sets[editor.sets.length-1],
  {
    type: 'text',
    content: '我听说……'
  }
)

editor.addBlock(
  editor.sets[editor.sets.length-1],
  {
    type: 'question',
    content: '你怀孕了？'
  }
)

editor.addBlock(
  editor.sets[editor.sets.length-1],
  {
    type: 'end'
  }
)

editor.show()
