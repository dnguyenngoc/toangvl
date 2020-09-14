// Import App
import Piece from '../helper/pieces.js'

export default class Empty extends Piece {
  constructor(player){
    super(player, (player === 1?  "" : ""));
    this.empty = 1;
    this.player = 0;
  }
}