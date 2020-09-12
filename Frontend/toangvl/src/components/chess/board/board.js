// Imports
import React from 'react';

// Imports App
import '../index.css';
import InitialBoard from '../../../games/chess/helper/initialBoard.js'

var squares = new InitialBoard();
console.log(squares[0].style)

export default class Board extends React.Component {

  defineSqures(i, j){
    if (squares[i*8 + j] != null){
      return squares[i*8 + j]
    }else{
      return ""
    }
  }
  
  render() {
    const board = [];
    for(let i = 0; i < 8; i++){
      const squareRows = [];
      for(let j = 0; j < 8; j++){
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
        squareRows.push(
          <div className={"square " + squareShade}>
            <button className={"square " + squareShade} style={this.defineSqures(i, j).style}></button>
          </div>
        );
      }
      board.push(<div className="board-row">{squareRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}

function isEven(num) {
  return num % 2 == 0
}