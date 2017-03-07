import Block from './block'

export default class Start extends Block {
  constructor (content) {
    super(content)
    this.type = 'start'
  }
}
