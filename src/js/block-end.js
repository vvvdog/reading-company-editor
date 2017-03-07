import Block from './block'

export default class End extends Block {
  constructor () {
    super()
    this.type = 'end'
    delete this.content
    delete this.to
  }
}
