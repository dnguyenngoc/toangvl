import Bishop from '../chessman/bishop.js';
import King from '../chessman/king.js';
import Knight from '../chessman/knight.js';
import Pawn from '../chessman/pawn.js';
import Queen from '../chessman/queen.js';
import Rook from '../chessman/rook.js';
import Empty from '../chessman/empty.js'

/**
* Tao ra mot mang 8x8 de dat quan co len thui
*/
export default function initialBoard(){

    const squares = Array(64).fill(new Empty());
    for(let i = 8; i < 16; i++){
      squares[i] = new Pawn(2);
      squares[i + 40] = new Pawn(1);
    }
    
    squares[58] = new Bishop(1);
    squares[61] = new Bishop(1);
    squares[56] = new Rook(1);
    squares[63] = new Rook(1);
    squares[57] = new Knight(1);
    squares[62] = new Knight(1);
    squares[59] = new Queen(1);
    squares[60] = new King(1);
  
  
    squares[0] = new Rook(2);
    squares[7] = new Rook(2);
    squares[1] = new Knight(2);
    squares[6] = new Knight(2);
    squares[2] = new Bishop(2);
    squares[5] = new Bishop(2);
    squares[3] = new Queen(2);
    squares[4] = new King(2);
  
  
    return squares;
  }