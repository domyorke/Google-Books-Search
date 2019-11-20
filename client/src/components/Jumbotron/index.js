import React from "react";
import "./style.css";

// Passing Jumbotron with children prop
function Jumbotron({ children }) {
  // The children are the two lines of text inside the jumbotron div
  return <div className="jumbotron mt-4">{children}</div>;
}

export default Jumbotron;
