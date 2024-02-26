import React from 'react'

const Book = (props) => {
  const { img, author, title, children } = props;

  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = () => {
    console.log(author);
  }; 

  return (
    <section
      className="book"
      onMouseOver={() => {
        console.log(author, 'author');
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>
        button
      </button>
      <button type="button" onClick={() => complexExample(author)}> 
        complex example
      </button>
    </section>
  );
};

export default Book