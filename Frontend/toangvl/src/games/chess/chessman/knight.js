// Import App
import Piece from './pieces.js'

export default class Knight extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg"));
    this.chessName = "knight"
  }
  isMovePossible(src){
    const list = [src, src - 17, src - 10, src + 6, src + 15, src - 15, src - 6, src + 10, src + 17]
    const listNew = list.filter(s => s>-1 && s <64)
    return listNew
  }
  isAttackPossible(src){
    const list = [src, src - 17, src - 10, src + 6, src + 15, src - 15, src - 6, src + 10, src + 17]
    const listNew = list.filter(s => s>-1 && s<64)
    return listNew
  }
}  

 