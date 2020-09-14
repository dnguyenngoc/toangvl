// Imports
import React from 'react';
import '../index.css';


export default function Square(props) {
    return (
      <button onClick={props.onClick} className={"square " + props.shade}
        style={props.style} 
        >
      </button>
      
    );
  
}