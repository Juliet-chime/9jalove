import React from "react";
import "./footer.css";
import logo from "../../asset/img/9jafindlove.svg";
import InputField from "../InputField/input";
import Button from "../Button/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footercontainer">
      <div className="footerlogo-text">
        <div>
          <img src={logo} alt=""></img>
        </div>
        <div>
          <h1>Connect With a Lover</h1>
        </div>
      </div>

      <div className="inputcontainer">
        <h1>Subscribe to get our Newsletter</h1>
        <div className="input-button">
          <div className="subscribe-input">
            <InputField placeholder="Your Email" />
          </div>
          <div className="subscribe-btn">
            <Button
              type="button"
              text="Subscribe"
              btnstyle={{
                background:
                  "linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%)",
                borderRadius: "60px",
                lineHeight: "33px",
                fontWeight: "500",
                fontFamily: " 'Poppins', sans-serif ",
              }}
            />
          </div>
        </div>
      </div>

      <div className="footer-link">
        <ul>
          <li>
            <Link to="/">Careers</Link>
          </li>
          <li>
            <Link to="/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/" style={{ borderRight: "none" }}>
              Terms &amp; Conditions
            </Link>
          </li>
        </ul>
        <h2>© 2021 Class Technologies Inc. </h2>
      </div>
    </section>
  );
};

export default Footer;
