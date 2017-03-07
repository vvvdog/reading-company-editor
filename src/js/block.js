import _ from 'lodash'
import { uuid } from './utils.js'

export default class Block {
  // start / text / question / answer / end
  constructor (content) {
    this.id = uuid()
    this.type = null
    this.content = content
    this.to = null
  }
}
