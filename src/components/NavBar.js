// global document
import React, { Component } from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = (props) => {
const setBackground = (theme) => {
  if (theme == "dark") {
     document.body.style.backgroundColor = "#212529";
     
     console.log("dark theme")
   }
    if (theme == "primary") 
    {
      document.body.style.backgroundColor = "#0d6efd";
         
    } 
    
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="#">
                  About
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/business">
                  business
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/entertainment">
                  entertainment
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/general">
                  general
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/health">
                  health
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/science">
                  science
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/sports">
                  sports
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" to="/technology">
                  technology
                </Link>
              </li>
            </ul>
            <form className="d-flex"></form>
          </div>
        </div>
       
      </nav>
    </div>
  );
};
export default NavBar;

