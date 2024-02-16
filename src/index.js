import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const firstBook = {
  title : "Madness: Race and Insanity in a Jim Crow Asylum",
  author : "Antonia Hylton",
  img : "https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg"
}

const secondBook = {
  title: "Madness: Race and Insanity in a Jim Crow Asylum",
  author: "San Diego",
  img: "https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg",
};

const thirdBook = {
  title: "lorem ipsum and the first Angel",
  author: "Hamilton Mega",
  img: "https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        img={firstBook.img}
        author={firstBook.author}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        img={secondBook.img}
      />
      <Book
        title={thirdBook.title}
        img={thirdBook.img}
        author={thirdBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props)
  return (
    <section className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
