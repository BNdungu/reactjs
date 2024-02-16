// import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <section className="book">
      <img
        src="https://m.media-amazon.com/images/I/51NABu3WrhL._SY445_SX342_.jpg"
        alt=""
      />
      <h1>Madness: Race and Insanity in a Jim Crow Asylum</h1>
      <h3>Antonia Hylton</h3>
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
