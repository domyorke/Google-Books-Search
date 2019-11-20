import React from "react";

// Footer component
function Footer() {
  return (
    <footer>
      <hr />
      {/* Classname is used to signify a CSS class in JSX */}
      <p className="pull-right">
        <i className="fab fa-github" /> Proudly built using React.js
      </p>
    </footer>
  );
}

export default Footer;
