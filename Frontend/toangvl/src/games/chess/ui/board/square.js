// Imports
import React from 'react';
import '../index.css';


export default function Square(props) {
    return (
      <button onClick={props.onClick} className={"square " + props.shade}
        // onMouseEnter={props.onMouseEnter}
        // onMouseLeave={props.onMouseLeave}
        style={props.style} 
        >
      </button>
      
    );
  
}