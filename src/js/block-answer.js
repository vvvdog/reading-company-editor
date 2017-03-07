import Block from './block'

export default class Answer extends Block {
  constructor (content) {
    super(content)
    this.type = 'answer'
  }
}
