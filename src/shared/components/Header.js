import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-header">locations</div>
        <ul>
          <Link to="/">Home</Link>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default Header;
