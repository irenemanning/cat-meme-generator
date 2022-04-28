import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import "./index.css"

const linkStyles = {
    width: "auto",
    padding: "8px",
    margin: "10px 6px",
    background: "#bc42f5",
    textDecoration: "none",
    color: "black",
    border: "3px solid yellow",
    display: "block",
    float: "left",
    textAlign: "center",
  };

  function Navbar() {
      return (
          <div className="navbar">
              <h1>Cat Meme Generator</h1>
              <NavLink
              to="/"
              exact
              style={linkStyles}
              activeStyle={{
                  background: "#7aadff"
              }}
              >
                Home
              </NavLink>
              <NavLink
              to="/catmemes"
              style={linkStyles}
              activeStyle={{
                  background: "#7aadff"
              }}
              >
                  Cat Memes
              </NavLink>
              <NavLink
              to="/createcatmeme"
              exact
              style={linkStyles}
              activeStyle={{
                  background: "#7aadff"
              }}
              >
                Create Meme
              </NavLink>
          </div>
      )
  }

export default Navbar;