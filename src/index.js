import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const books = [
  {
    _id: 1,
    title: "Madness: Race and Insanity in a Jim Crow Asylum",
    author: "Antonia Hylton",
    img: "https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg",
  },
  {
    _id: 2,
    title: "Madness: Race and Insanity in a Jim Crow Asylum",
    author: "San Diego",
    img: "https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg",
  },
  {
    _id: 3,
    title: "lorem ipsum and the first Angel",
    author: "Hamilton Mega",
    img: "https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg",
  },
];


function BookList() {

  return (
    <section className='booklist'>
      {books.map((item) => {
        return <Book key = {item._id} book={item}/>
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const {img,author,title,children} = props.book
  return (
    <section className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      {children}
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
