import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const books = [
  {
    _id: 1,
    title: "Madness: Race and Insanity in a Jim Crow Asylum",
    author: "Antonia Hylton",
    img: "https://m.media-amazon.com/images/I/81kZ3Gl3WKL._AC_UY218_.jpg",
  },
  {
    _id: 2,
    title: "I Love You to the Moon and Back",
    author: " Amelia Hepworth and Tim Warnes",
    img: "https://m.media-amazon.com/images/I/81mpSoJzv4L._AC_UY218_.jpg",
  },
  {
    _id: 3,
    title: "KIDS PREFERRED Guess How Much I Love You , 9 inches (96784)",
    author: "Nutbrown Hare Bean Bag Plush",
    img: "https://m.media-amazon.com/images/I/91Fjx9MziHL._AC_UY218_.jpg",
  },
];


function BookList() {

  return (
    <section className='booklist'>
      {books.map((item) => {
        return <Book key = {item._id} {...item}/>
      })}
    </section>
  )
}

const Book = (props) => {
  const {img,author,title,children} = props

  const clickHandler = () => {
    alert('hello world')
  }

  const complexExample = () => {
    console.log(author);
  }

  return (
    <section className="book">
      <img src={img} alt="" />
      <h1 onClick = {() => console.log(title)}>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>button</button>
      <button type="button" onClick = {() => complexExample(author)}>complex example</button>
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
