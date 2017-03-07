import Block from './block'

export default class Question extends Block {
  constructor (content) {
    super(content)
    this.type = 'question'
    this.to = []
  }
}
