//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";

const myno = 8;
const name = "Viral";
var d = new Date();
var n = d.getFullYear();
var h = d.getHours();
const customStyle = {
  color: "green"
};
let greeting;
if (h < 12) {
  greeting = "Good Mornings";
  customStyle.color = "red";
} else if (h < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1>Hello World,Its Viral here</h1>
    <p>My lucky number is {myno}</p>
    <p>This is created by {name}</p>
    <p>Copyright {n} </p>
    <p>Hours {h}</p>
    <Heading />
    <h1 style={customStyle}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
