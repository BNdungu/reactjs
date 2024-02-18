import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = React.useState({name: 'Peter', age: '34', message: 'Hello Peter'})

  const changeMessage = () => {
    setPerson({...person, message: 'How are you doing'})
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage} >change message</button>
    </>
  );
  
};

export default UseStateObject;
