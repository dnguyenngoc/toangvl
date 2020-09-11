// Import App
import Piece from '../helper/pieces.js'


  /**
   * Quan co king voi ke thua thuoc tinh pieace 
   * neu player = 1 thi style piece = king_white
   * neu player = 2 thi style piece = king_black
   */
export default class King extends Piece {
    constructor(player){
        var king_while = "../../../images/chess/king_white.svg";
        var king_black = "../../../images/chess/king_black.svg"
        super(
            player, 
            (player === 1? king_while : king_black));
    }

    // nhung vi tri co the di chuyen cua king so voi vi tri hien tai vi ban co co be ngang bang 8
    // isMovePossible(src, dest){
    //     return (    
    //         src - 9 === dest || 
    //         src - 8 === dest || 
    //         src - 7 === dest || 
    //         src + 1 === dest || 
    //         src + 9 === dest || 
    //         src + 8 === dest || 
    //         src + 7 === dest || 
    //         src - 1 === dest
    //     );
    //   }
}   