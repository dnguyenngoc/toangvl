import React from 'react';
import './index.css';

// 1 button stype là url quân cờ css là class = square va dark/light-square với fuction là onclick
export default function Square(props) {
    return (
      <button className={"square " + props.shade}
        onClick={props.onClick}
        style={props.style}>
      </button>
    );
  
}