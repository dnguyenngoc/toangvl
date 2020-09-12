// Imports
import React from 'react';

// Imports App
import Board from './board/board.js';
import './index.css'

export default class Chess extends React.Component {
    render() {
        return (
          <div>
            <div className="game">
              <div className="game-board">
                <Board/>
              </div>
            </div>
          </div>
         
        );
    }
 }
   
