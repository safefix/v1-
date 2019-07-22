import React from "react";
import "./style.css";

function Nav (props) {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <img src="http://www.iconninja.com/files/866/283/681/handshake-icon.png" alt="handshake" height="50px" width="50px"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="https://localhost:3000">handShake <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://localhost:3000">Contact Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://localhost:3000">How it Works</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="https://localhost:3000">Testimonials</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default Nav;