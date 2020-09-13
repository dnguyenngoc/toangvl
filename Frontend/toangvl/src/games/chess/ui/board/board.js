// Imports
import React from 'react';

// Imports App
import '../index.css';
import Square from './square.js'

export default class Board extends React.Component {

  renderSquare(i, squareShade) {
    return <Square 
      piece = {this.props.squares[i]} 
      style = {this.props.squares[i]? this.props.squares[i].style : null}
      shade = {squareShade}
      // onMouseEnter={() => this.props.onMouseEnter(i)}
      // onMouseLeave={() => this.props.onMouseLeave(i)}
      onClick={() => this.props.onClick(i)}
    />
  }

  render() {
    const board = [];
    for(let i = 0; i < 8; i++){
      const squareRows = [];
      for(let j = 0; j < 8; j++){
        var location = getLocation(i, j);
        if (this.props.suggest.status === 1){
          if (this.props.suggest.dict.indexOf(location) >= 0){
            squareRows.push(this.renderSquare(location, "hover-square"));       
          }
          else{
            const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
            squareRows.push(this.renderSquare(location, squareShade));    
          }
        }else{
          const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
          squareRows.push(this.renderSquare(location, squareShade));      
        }                                                
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

function getLocation(i, j) {
  return i*8+j
}
function isEven(num) {
  return num % 2 === 0
}