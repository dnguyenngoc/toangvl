// Import App
import Piece from './pieces.js'


export default class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg"));
    this.chessName = "bishop"
  }
  isMovePossible(src){
    const list = [src, src - 17, src - 10, src + 6, src + 15, src - 15, src - 6, src + 10, src + 17]
    list.filter(s => s>-1 && s<64)
    return list
  }
  isAttackPossible(src){
    const list = [src, src - 17, src - 10, src + 6, src + 15, src - 15, src - 6, src + 10, src + 17]
    list.filter(s => s>-1 && s<64)
    return list
  }
}