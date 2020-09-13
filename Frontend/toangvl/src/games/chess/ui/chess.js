// Imports
import React from 'react';

// Imports App
import Board from './board/board.js';
import './index.css';
import InitialBoard  from '../helper/initialBoard.js';
import Empty from '../chessman/empty.js';

export default class Chess extends React.Component {

  constructor(){
   
    super();
    this.state = {
      squares: InitialBoard(),
      player: 1,
      suggest: {status: 0, dict: []},
      click: 0,
      location: -1,
    }
  }

  // draw Suggest
  drawSuggest(i, squares, suggest){
    console.log("[Sugesst] Cac vi tri co the click: ", suggest)
    this.setState({squares: squares, location: i, suggest: {status: 1, dict: suggest}});
  
  }

  // removeSugest
  removeSuggest(i, squares, suggest) {
    console.log("[Remove Sugesst] Cac vi tri co the remove: ", suggest)
    this.setState({squares: squares, location: -1, suggest: {status: -1, dict: suggest}});
  }

  // handleMoveChessMan
  moveCheckMan(start, end){
    console.log("[Move Chessman] move from %s to %s starting....", start, end);
    const squares = this.state.squares.slice();
    squares[end] = squares[start];
    squares[start] = new Empty();
    this.setState({squares: squares});
    console.log("[Move Chessman] ....stop");
  }

  // handleClick
  onClickHandle(i){
    const squares = this.state.squares.slice();
    if(this.state.click === 0){
      if (!this.state.squares[i].empty){
        console.log("[Click: 1] Trong vung cho phep")
        const suggest = squares[i].isMovePossible(i);
        this.drawSuggest(i,squares, suggest);
        this.setState(this.setState({click: 1}));
      }else{
        console.log("[Click: 1] Ngoai vung cho phep")
      }
    }
    else{
      if (this.state.suggest.dict.indexOf(i) >= 0){
        console.log("[Click: 2] Trong vung cho phep")
        if (!this.state.squares[i].empty){
          console.log("[Click: 2] Click vao chinh no -> remove goi y")
          const suggest = squares[i].isMovePossible(i);
          this.removeSuggest(i,squares, suggest);
          this.setState(this.setState({click: 0, suggest: {status: 0, dict: []}}));
        }else{
          console.log("[Click: 2] Move quan co")
          this.moveCheckMan(this.state.location, i);
          this.setState(this.setState({click: 0, suggest: {status: 0, dict: []}, location: -1}));
        }
      }
      else{
        console.log("[Click: 2] Ngoai vung cho phep")
      }
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
                  // onMouseEnter={(i) =>  this.onMouseEnter(i)}
                  // onMouseLeave={(i) =>  this.onMouseLeave(i)}
                  onClick= {(i) =>  this.onClickHandle(i)}
                />
              </div>
            </div>
          </div>
         
        );
    }
 }
   
