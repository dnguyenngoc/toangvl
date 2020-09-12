// Imports
import React from 'react';

// Imports App
import Board from './board/board.js';
import './index.css'
import InitialBoard  from '../helper/initialBoard.js'

export default class Chess extends React.Component {

  constructor(){
    super();
    this.state = {
      squares: InitialBoard(),
      player: 1,
      turn: 'white'
    }
  }

  handleClick(i){
    const squares = this.state.squares.slice();
    if (squares[i] != null){
      squares[i].style = {...squares[i].style, backgroundColor: "RGB(111,143,114)"};
      console.log("have click", i);
      this.setState({
        squares: squares, 
        player: 1,
        turn: 'white'
      });
    }
    
  }

  render() {
        return (
          <div>
            <div className="game">
              <div className="game-board">
                <Board
                  squares = {this.state.squares}
                  onClick = {(i) => this.handleClick(i)}
                />
              </div>
            </div>
          </div>
         
        );
    }
 }
   
