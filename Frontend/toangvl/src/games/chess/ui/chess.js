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
      suggest: {status: 0, dict: []}
    }
  }

  // neu squares == null co nghia la con tro chuot khong nam tren vi tri co quan co
  onMouseEnter(i){
    const squares = this.state.squares.slice();
    if (!this.state.squares[i].empty) {
      const suggest = squares[i].isMovePossible(i);
      this.setState({squares: squares, location: i, suggest: {status: 1, dict: suggest}});
    }
  }
  onMouseLeave(i) {
    const squares = this.state.squares.slice();
    if (!this.state.squares[i].empty) {
      const suggest = squares[i].isMovePossible(i);
      this.setState({squares: squares, location: i, suggest: {status: -1, dict: suggest}});
    }
  }



  render() {
        return (
          <div>
            <div className="game">
              <div className="chat-box">
                Here is a chat box
              </div>
              <div className="game-board">
                <Board
                  squares = {this.state.squares}
                  suggest = {this.state.suggest}
                  onMouseEnter={(i) => this.onMouseEnter(i)}
                  onMouseLeave={(i) => this.onMouseLeave(i)}
                />
              </div>
              {/* <div className="rank-info">
                Here is a rank
              </div> */}
            </div>
          </div>
         
        );
    }
 }
   
