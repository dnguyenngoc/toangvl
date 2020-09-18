// Import App
import Piece from './pieces.js'

export default class Empty extends Piece {
  constructor(player){
    super(player, (player === undefined?  "" : ""));
    this.chessName = "empty"
  }
}