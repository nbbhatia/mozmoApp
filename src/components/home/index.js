import React from "react";
import { Link } from "react-router-dom";
function index() {
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Link to="/contact">
        <h1>contact</h1>
      </Link>
      <Link to="/about">
        <h1>about</h1>
      </Link>
    </div>
  );
}

export default index;
