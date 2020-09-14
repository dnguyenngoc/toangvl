// Imports
import React from 'react';

// Imports App
import Board from './board/board.js'; // handle board khi nguoi choi thuc hien
import './index.css'; // css
import InitialBoard  from '../helper/initialBoard.js'; //board ban dau
import InitialTurn  from '../helper/initialTurn.js'; //turn ban dau
import Empty from '../chessman/empty.js'; // empty la define nhung o khong chua quan co
import utils from '../helper/utils.js'; // function 

export default class Chess extends React.Component {

  constructor(){
    super();
    this.state = {
      squares: InitialBoard(), // array the hien all quan co hien dang co tren ban co
      list: InitialTurn(), // turn hien tai va list quan co con lai tren ban
      suggest: {dict: [], status: 0}, // danh sach de nghi cho vi di chuyen quan co
      attack: [], // danh sach co the thuc hien an quan co
      click: 0, // tinh toan step cua hanh dong click gom 0: chua lam gi het 1 dang o buoc thuc hien hanh dong
      location: -1, // vi tri hien tai cua click
    }
  }

  // handleMoveChessMan
  moveCheckMan(start, end){
    console.log("[Move Chessman] move from %s to %s starting....", start, end);
    const squares = this.state.squares.slice();
    squares[end] = squares[start];
    squares[start] = new Empty(0);
    this.setState({squares: squares});
    console.log("[Move Chessman] ....stop");
  }

  changTurnAndUpdateLocation(turn, white, black, start, end){
    if (turn === 'white'){
      turn = 'black';
      white.splice(start, 1);
      white.push(end);

    }else{
      black.splice(start, 1);
      black.push(end);
      turn = 'white';
    }
    this.setState({list: {turn: turn, white: white, black: black}})
  }

  // handleClick
  onClickHandle(i){

    const black = this.state.list.black.slice();
    const white = this.state.list.white.slice();
    const squares = this.state.squares.slice();
    const attack = this.state.attack.slice();
    var turn = this.state.list.turn;
    var location = this.state.location;
    var click = this.state.click;

    // Click 1: Select chessman make change click 0 > 1 change location to i change suggest [] -> [1,2,3] change attack [] -> [1,2,3]
    if(click === 0) {
      if ((turn === 'white' && utils.isitemInList(i, white)) || (turn === 'black' && utils.isitemInList(i, black)) ) {
        console.log("[Turn %s][Click: 1] Select chessman ok", turn);
        this.setState({click: 1, location: i, suggest: {status: 1, dict: squares[i].isMovePossible(i)}, attack: squares[i].isAttackPossible(i)});
      }
      else console.log("[Turn %s][Click: 1] Empty chessman %s", turn);
    }

    // Click 2: move or ignore select chessman
    else{
      if (utils.isitemInList(i, this.state.suggest.dict)) {
        console.log("[Turn %s][Click: 2] Location matching with suggest", turn)
        if (i == location) {
          console.log("[Turn %s][Click: 2] On Select chessman -> Ignore select chessman", turn)
          this.setState({click: 0, location: -1, suggest: {status: 0, dict: []}});
        }
        else if (utils.isitemInList(i, attack)){
          
        }
        else {
          
          console.log("[Turn %s][Click: 2] Move quan co", turn);
          this.moveCheckMan(location, i);
          this.changTurnAndUpdateLocation(turn, white, black, location, i);
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
                {this.state.turn}
              </div>
              <div className="game-board">
                <Board
                  squares = {this.state.squares}
                  suggest = {this.state.suggest}
                  onClick= {(i) =>  this.onClickHandle(i)}
                />
              </div>
              
            </div>
          </div>
         
        );
    }
 }

