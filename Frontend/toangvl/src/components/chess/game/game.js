export default class Game extends React.Component {
    constructor(){
      super();
      this.state = {
        squares: initialiseChessBoard(),
        whiteFallenSoldiers: [],
        blackFallenSoldiers: [],
        player: 1,
        sourceSelection: -1,
        status: '',
        turn: 'white'
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
              <div className="game-info">
                <div className="game-status">{this.state.status}</div>  
    
                <div className="fallen-soldier-block">
                  {<FallenSoldierBlock
                  whiteFallenSoldiers = {this.state.whiteFallenSoldiers}
                  blackFallenSoldiers = {this.state.blackFallenSoldiers}
                  />
                }
                </div>
                
              </div>
            </div>
          </div>
         
        );
    }
 }
   
