import React from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/" style={linkStyles} end>Home</NavLink>
              <NavLink to="/catmemes" style={linkStyles} end>Cat Memes</NavLink>
              <NavLink to="/createcatmeme" style={linkStyles} end>Create Meme</NavLink>
          </div>
      )
  }

export default Navbar;

// style={({isActive}) => ({color: isActive ? "#7aadff" : "#bc42f5"})} 
//   className={({isActive}) => `ln-${isActive ? ' active' : ''}`} >
//   Go Home