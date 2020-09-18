// Import App
import Piece from './pieces.js'
import utils from '../helper/utils.js'

export default class Pawn extends Piece {
  constructor(player){
    super(player, (player === 1?  "https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg"));
    this.initialPositions = {
      1: [48, 49, 50, 51, 52, 53, 54, 55],
      2: [8, 9, 10, 11, 12, 13, 14, 15]
    }
    this.chessName = "pawn"
  }

  getSuggestAndAttack(state, i) {
    const attack = this.isAttackPossible(i).filter(a => state.squares[a].chessName !== 'empty' && state.squares[a].player !== utils.getTurnByPlayer(state.turn));
    const suggest = this.isMovePossible(i).filter(s => state.squares[s].chessName === 'empty' || s === i);
    attack.forEach(a => {
      if (a.player !== utils.getTurnByPlayer(state.turn)) suggest.push(a);
    });
    return {attack: attack, suggest: suggest}
  }

  isMovePossible(src){
    if (this.player !== 1) {
      if (this.initialPositions[2].indexOf(src) >= 0)
        return [src, src+8, src+16] 
      else{
        return [src, src+8]
      }
    }else{
      if (this.initialPositions[1].indexOf(src) >= 0)
        return [src, src-8, src-16] 
      else{
        return [src, src-8]
      }
    }
  }

  isAttackPossible(src) {
    if (this.player !== 1) {
      return [src+7, src+9]
    }else{
      return [src-7, src-9]
    }

  }

}