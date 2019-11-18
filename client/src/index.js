//Import react, the ReactDOM, App.js, and registerServiceWorker.js

//ES6 way of writing "var React = require('react')
// Allows us to use React methods such as React.Component.
import React from "react";
// React-dom package provides methods such as render()
import ReactDOM from "react-dom";
//Importing App.js
import App from "./App";
//Importing registerServiceWorker.js
import registerServiceWorker from "./registerServiceWorker";

//ReactDOM Render method used to render the App component, getting the root ID in the HTML, and importing the logic from registerServiceWorker.js
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
