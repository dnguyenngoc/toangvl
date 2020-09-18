// Import App
import Piece from './pieces.js'
import utils from '../helper/utils.js'

export default class Rook extends Piece {
  constructor(player){
    super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg"));
    this.chessName = "rook"
  }

  getSuggestAndAttack(state, i){
    const attack = this.isAttackPossible(i).filter(a => state.squares[a].chessName !== 'empty' && state.squares[a].player !== utils.getTurnByPlayer(state.turn));
    const suggest = this.isMovePossible(i).filter(s => state.squares[s].chessName === 'empty' || s === i);
    // if (state.turn == 'white')
    //   var minL = suggest.filter(e => utils.isitemInList(e, state.now.white))
    //   if (minL !== undefined) {
    //     sugesst.filter(e=> e < Math.min(minL))
    //   }
    // else{
      
    // }
    return {attack: attack, suggest: suggest}
  }

  isMovePossible(src){
    const list = [src]
    for(let i =1; i < 8; i++){
      list.push(src + 8*i)
      list.push(src - 8*i)
    }
    const newlist = list.filter( e => e > -1 && e < 64);
    return newlist
  }

  isAttackPossible(src){
    const list = []
    for(let i = 0; i < 8; i++){
      list.push(src+ 8*i)
      list.push(src-8*i)
    }
    const newlist = list.filter( e => e > -1 && e < 64);
    return newlist
  }
}

