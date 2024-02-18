import React, { useState } from 'react';

const UseStateBasics = () => {

  const handleClick = () => {
    if (text === "Random Title") setText("hello World");
    else{
      setText("Random Title");
    }
  }
  const [text, setText] = useState('Random Title')

  return <React.Fragment> 
    <h1>{text}</h1>
    <button type="button" className='btn' onClick={handleClick} >Change Title</button>
  </React.Fragment>;
};

export default UseStateBasics;
