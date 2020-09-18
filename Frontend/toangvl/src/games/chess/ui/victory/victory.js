// Imports
import React from 'react';

// Imports App
import '../index.css';
import PopupWin from './popup.js'

export default class Victory extends React.Component {
   
  createPopUpVictory(){
      return(
      <PopupWin 
        mess = {this.props.victory.mess} 
        onClick={() => this.props.restartGame}
      />
    
      )
  }

  render() {
    const victory = [];
    if (this.props.victory.site !== -1){
        victory.push(this.createPopUpVictory())
    }
    return (
      <div>
        {victory}
      </div>
    );
  }
}
