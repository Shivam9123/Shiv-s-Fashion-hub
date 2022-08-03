import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      
      <div></div>
      <div>
        <Link to="/">home</Link>
        <span> | </span>
        <Link to="/new"> New Arrival</Link>
        <span> | </span>
        <Link to="/men">men</Link>
        <span> | </span>
        <Link to="/women">women</Link>
        <span> | </span>
        <Link to="/kids">kids</Link>
        <span> | </span>
        <Link to="/shoes">shoes</Link>
      </div>
    </div>
  );
};

export default Navbar;
