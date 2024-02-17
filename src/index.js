import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import { books } from "./books";
import Book from './Book'

function BookList() {
  return (
    <section className="booklist">
      {books.map((item) => {
        return <Book key={item._id} {...item} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
