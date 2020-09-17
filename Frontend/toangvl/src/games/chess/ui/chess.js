// Imports
import React from 'react';

// Imports App
import Board from './board/board.js'; // handke board khi người chơi thực hiện thao tao (update board)
import './index.css'; // css
import InitialBoard  from '../helper/initialBoard.js'; //board khởi tạo ban đầu
import Empty from '../chessman/empty.js'; // define một vị trí lá empty(có nghĩa là k có quân cờ nào)
import utils from '../helper/utils.js'; // một số fuction hiệu quả dùng nhiều

export default class Chess extends React.Component {

  constructor(){
    super();
    this.state = {
      squares: InitialBoard(), // array thể hiện quân cơ hiện có trên bàn
      now: {black:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 
        white: [63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48]}, // danh sách quân cờ hiện tại còn lại ban đầu
      remove: {white:[], black: []}, // danh sách quân cờ đã bị đối phương kill @@~
      suggest: {status: 0, dict: []}, // danh sách các vị trí đề nghị cho việc di chuyển status 1=> white -1 => black
      attack: [], // list danh sách có thể attack hiện tại của quân cờ được select
      click: "step1", // thể hiện trạng thái click hiện tại chưa defaut là step1
      turn: "white", // turn hiên tại được phép thực hiện hành động
      location: -1, // vị trí hiện tại
      victory: {site: -1, mess: "not start yet"} // trạng thái chiến thắng
    }
  }


  logicGame(i) {
    const black = this.state.now.black.slice();
    const white = this.state.now.white.slice();
    const squares = this.state.squares.slice();
    const attack = this.state.attack.slice();
    const suggest = this.state.suggest.dict.slice();
    var turn = this.state.turn;
    var locationNow = this.state.location;
    var click = this.state.click;
    var victory = this.state.victory;

    // Click 1: Select chessman make change click 0 > 1 change location to i change suggest [] -> 
    // [1,2,3] change attack [] -> [1,2,3]
    if (click === "step1") {
      // Click 1: Check click white or black and update state include location, click, suggest || ignore if click empty
      if ((turn === 'white' && utils.isitemInList(i, white)) || (turn === 'black' && utils.isitemInList(i, black)) ) {
        const attack = squares[i].isAttackPossible(i)
          .filter(a => squares[a].chessName !== 'empty' && squares[a].player !== utils.getTurnByPlayer(turn));
        const suggest = squares[i].isMovePossible(i).filter(s => squares[s].chessName == 'empty' || s == i);
        attack.forEach(a => {
         if (a.player !== utils.getTurnByPlayer(turn)) suggest.push(a);
        });
        console.log("[ATTACK]: ", attack);
        console.log("[SUGGEST]: ", suggest);
        this.setState({click: "step2", location: i, suggest: {status: 1, dict: suggest}, attack: attack});
      }else console.log("[Turn %s][Click: 1] Empty chessman %s", turn);
    } 
    
    // Click 2: Move || ignore || attack chessmen
    else{
      // Click 2: In list move. so make move and update state (change: )
      if (utils.isitemInList(i, attack) && squares[i].chessName !== "empty"){
          this.moveChessManAndUpdateSquares(squares, locationNow, i);
          this.changTurnAndUpdateTurnAndNow(turn, white, black, locationNow, i, "attack");
          this.setState({click: "step1", location: -1, attack: [], suggest: {status: 0, dict: []}, });
      }
  
        // Click 2: If location move in suggest update click, location and suggest to default
      else if (utils.isitemInList(i, suggest)) {
        // Click 2: Igrore click 1 because click on same click 1 and update state to default
        if (i === locationNow) {
            this.setState({click: "step1", location: -1, attack: [], suggest: {status: 0, dict: []}});
        }
        else {
            this.moveChessManAndUpdateSquares(squares, locationNow, i);
            this.changTurnAndUpdateTurnAndNow(turn, white, black, locationNow, i, "move");
            this.setState({click: "step1", location: -1, suggest: {status: 0, dict: []}});
        }
      }
    }

  }

  // handleMoveChessMan
  moveChessManAndUpdateSquares(squares, start, end) {
    squares[end] = squares[start];
    squares[start] = new Empty(0);
    this.setState({squares: squares});
  }

  //Change turn and update location
  changTurnAndUpdateTurnAndNow(turn, white, black, start, end, type){
    if (turn === "white" && type === "move"){
        turn = 'black'; white = white.filter(w=>w!==start); white.push(end);
    }else if (turn === "black" && type === "move") {
        turn = 'white'; black.splice(start, 1); black.push(end);
    }else if (turn === "white" && type === "attack") {
        turn = 'black'; white.pop(start); black.pop(end); white.push(end);
    }else {
        turn = 'white'; black.pop(start,); white.pop(end); black.push(end);  
    } 
    this.setState({turn: turn, now: {white: white, black: black}})
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
              onClick= {(i) =>  this.logicGame(i)}
            />
          </div>
          <div className="game-board">
          
          </div>
          
        </div>
      </div>
     
    );
  }
}

