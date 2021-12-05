import React from "react";
import "./navbar.css";
import Button from "../Button/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarcontainer">
      <div className="navbar-text">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">FAQs</Link>
          </li>
          <li>
            <Link to="/terms">Terms</Link>
          </li>
          <li>
            <Link to="/pricing" className="active">
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-btn-holder">
        <div className="navbar-btn">
          <Button
            text="Login"
            type="button"
            btnstyle={{
              backgroundColor: "#fff",
              boxShadow: " 0px 20px 24px rgba(0, 0, 0, 0.03)",
              color: "#6C6C6C",
              letterSpacing: "0.02em",
              fontWeight: "bold",
              fontFamily: " 'Poppins', sans-serif ",
            }}
          />
        </div>
        <div className="navbar-btn">
          <Button
            text="Sign Up"
            type="button"
            btnstyle={{
              letterSpacing: "0.02em",
              fontWeight: "bold",
              fontFamily: " 'Poppins', sans-serif ",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
