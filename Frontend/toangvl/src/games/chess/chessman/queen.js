// Import App
import Piece from './pieces.js'

export default class Queen extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg"));
    this.chessName = "queen"
  }
  isMovePossible(src){
    const list = [src, src - 17, src - 10, src + 6, src + 15, src - 15, src - 6, src + 10, src + 17]
    const listNew = list.filter(s => s>-1 && s<64)
    return listNew
  }
  isAttackPossible(src){
    const list = [src, src - 17, src - 10, src + 6, src + 15, src - 15, src - 6, src + 10, src + 17]
    const listNew = list.filter(s => s>-1 && s<64)
    return listNew
  }
}