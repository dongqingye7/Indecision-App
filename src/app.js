import React, { Component } from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css'
import "./styles/styles.scss";

ReactDOM.render(
  <IndecisionApp options={["Read a book", "Workout", "Learn code"]} />,
  document.getElementById("app")
);