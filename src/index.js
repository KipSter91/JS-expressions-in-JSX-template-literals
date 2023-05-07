import React from "react";
import ReactDOM from "react-dom";

const fName = "Barbara";
const lName = "Márku";
const num = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
      {
        //WITH TEMPLATE LITERALS
        ///{`${fName} ${lName}`}
        //OR WITH THIS SOLUTION
        //{fName + " " + lName}
      }
    </h1>
    <p>Your lucky number is: {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
