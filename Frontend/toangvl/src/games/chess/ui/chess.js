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
    }
  }

  onMouseEnter(i){
    const squares = this.state.squares.slice();
    // neu squares == null co nghia la con tro chuot khong nam tren vi tri co quan co
    if (squares[i]!= null) {
      const suggest = squares[i].isMovePossible(i);
      console.log(suggest)
      for (let j of suggest) {
        console.log(j)
        if (j != i){
          squares[j].style = {...squares[j].style, backgroundColor: "RGB(111,143,114)"};
        }
        // else if (squares[j].isMovePossible(j) == null) {
        //   squares[j].style = {backgroundColor: "RGB(111,143,114)"};
        // }
      }
      this.setState({squares: squares, location: i});
    }
  }
  onMouseLeave(i) {
    // const squares = this.state.squares.slice();
    // if (squares[i].isMovePossible() != null) {
    //   const suggest = squares[i].isMovePossible(i);
    //   for (let j of suggest) {
    //     if (j == i){
    //       squares[j].style = {...squares[j].style}
    //       delete squares[j].style["backgroundColor"]
    //     }else{
    //       // squares[j] = new Empty();
    //       // squares[j].style = null;
    //     }
    //   }
    //   this.setState({squares: squares, location: i});
     
    // }
  }



  render() {
        return (
          <div>
            <div className="game">
              <div className="game-board">
                <Board
                  squares = {this.state.squares}
                  onMouseEnter={(i) => this.onMouseEnter(i)}
                  onMouseLeave={(i) => this.onMouseLeave(i)}
                />
              </div>
            </div>
          </div>
         
        );
    }
 }
   
