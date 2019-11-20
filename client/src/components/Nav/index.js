import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

// A class based component is Javascript class. It extends React.Component and it's only required method is render()
// Extends component -> this line allows the Nav component to inherit everything that comes with a react component including the state object
class Nav extends Component {
  // State object with two key value pairs, open and width
  state = {
    open: false,
    width: window.innerWidth
  };

  // updateWidthis a functional component. A functional component is a Javascript function that accepts props as it's argument and returns JSX
  updateWidth = () => {
    // newState gets the value of width, which contains the width of the window's content
    const newState = { width: window.innerWidth };

    // If this.state.open and newState.Width are greater than 991, newState.open is false. 
    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }
    // If not, setState to the newState
    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };


  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          Google Books
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                to="/saved"
              >
                Saved
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
