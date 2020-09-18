// Import App
import Piece from './pieces.js'
import utils from '../helper/utils.js'


export default class King extends Piece {
    constructor(player){
        super(player, (player === 1? "https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg" : "https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg"));
        this.chessName = "king"
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
        const list = [src, src - 9, src - 8, src - 7, src + 1, src - 1, src + 9, src + 8, src + 7,]
        const newlist = list.filter( e => e > -1 && e < 64);
        return newlist
    }
    isAttackPossible(src){
        const list = [src - 9, src - 8, src - 7, src + 1, src - 1, src + 9, src + 8, src + 7,]
        const newlist = list.filter( e => e > -1 && e < 64);
        return newlist
    }
}   