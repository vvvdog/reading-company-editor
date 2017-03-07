import Block from './block'

export default class Text extends Block {
  constructor (content) {
    super(content)
    this.type = 'text'
  }
}
