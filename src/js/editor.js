import Start from './block-start'
import Text from './block-text'
import Question from './block-question'
import Answer from './block-answer'
import End from './block-end'

export default class Editor {
  constructor () {
    this.data = {}
    this.sets = []
  }

  init () {
    this.addBlock(
      null,
      {
        type: 'start',
        content: '你好'
      }
    )
  }

  addBlock (from, block) {
    switch (block.type) {
      case 'start':
        this.sets.push(new Start(block.content))
        break

      case 'text':
        var newblock = new Text(block.content)
        from.to = newblock.id
        this.sets.push(newblock)
        break

      case 'question':
        var newblock = new Question(block.content)
        from.to = newblock.id
        this.sets.push(newblock)
        break

      case 'end':
        var newblock = new End()
        from.to = newblock.id
        this.sets.push(newblock)
        break

      default:
        break
    }
  }

  show () {
    console.log(this.sets)
  }
}
