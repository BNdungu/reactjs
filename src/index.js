import React from "react";
import ReactDOM from "react-dom";

function Greetings() {
    return <h1>Hello There this is my first component</h1>
}

ReactDOM.render(<Greetings/>, document.getElementById('root'))