import React, { useState } from 'react';

const UseStateBasics = () => {

  const handleClick = () => {
    setText('hello World')
  }
  const [text, setText] = useState('Random Title')
  return <React.Fragment> 
    <h1>{text}</h1>
    <button type="button" className='btn' onClick={handleClick} >Change Title</button>
  </React.Fragment>;
};

export default UseStateBasics;
