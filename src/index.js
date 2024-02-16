// import React from "react";
import ReactDOM from "react-dom";

import './style.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
    <section className="book">
      <Image />
      <Title/>
      <Author/>
    </section>
  );
}

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg"
      alt=""
    />
  );
}

const Title = () => {
  return <h1>Madness: Race and Insanity in a Jim Crow Asylum</h1>
}

const Author = () => {
  return <h3>Antonia Hylton</h3>;
}
ReactDOM.render(<BookList />, document.getElementById("root"));
