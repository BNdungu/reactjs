// import React from "react";
import ReactDOM from "react-dom";

function Greetings() {
  return <div>
    <Name/>
    <Profession/>
  </div>
}

const Name = () => <p>My name is John Doe</p>;

const Profession = () => {
    return <p>I'm a Software Dev</p>;
}

ReactDOM.render(<Greetings />, document.getElementById("root"));
