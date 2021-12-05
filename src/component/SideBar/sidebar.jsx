import React, { useState } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import profileimg from "../../asset/img/profile-img.svg";
import chatimg from "../../asset/img/chat-img.svg";
import sidebararrow from "../../asset/img/sidebar-arrow.svg";
import SideBarHeader from "./sidebarheader";

const SideBar = ({ children }) => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const openMenu = (e) => {
    //e.stopPropagation();
    setIsMenuActive(true);
  };

  const closeMenu = (e) => {
    // e.preventDefault();
    setIsMenuActive(false);
  };
  return (
    <>
      <div
        className={`side-nav ${isMenuActive ? "showsidebar" : "hidesidebar"}`}
      >
        <div className="sidenav__close-icon">
          <i
            className="fa fa-times sidenav__brand-close"
            onClick={closeMenu}
          ></i>
        </div>

        <div className="profileimg-holder">
          <img src={profileimg} alt="" width="50" height="50" />
          <div className="profiletext">
            <h3>Ralph Edwards</h3>
            <p>ralph@gmail.com</p>
          </div>
        </div>

        <div className="profilelist-holder">
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                <i className="fa fa-location-arrow"></i>
                &nbsp;&nbsp;&nbsp; Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa fa-envelope"></i>
                &nbsp;&nbsp;&nbsp; Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fa fa-cog"></i>
                &nbsp;&nbsp;&nbsp;Settings
              </Link>
            </li>
          </ul>
        </div>

        <div className="chatholder">
          <h2>Recent Chat</h2>
          <div>
            <div className="chat-profile">
              <img src={chatimg} alt="" />
              <h5>Darrell Steward</h5>
              <p>3</p>
            </div>

            <div className="chat-profile">
              <img src={chatimg} alt="" />
              <h5>Darrell Steward</h5>
            </div>

            <div className="chat-profile">
              <img src={chatimg} alt="" />
              <h5>Darrell Steward</h5>
            </div>

            <div className="chat-profile">
              <img src={chatimg} alt="" />
              <h5>Darrell Steward</h5>
            </div>

            <div className="chat-profile">
              <img src={chatimg} alt="" />
              <h5>Darrell Steward</h5>
              <p>3</p>
            </div>

            <div className="chat-profile">
              <img src={chatimg} alt="" />
              <h5>Darrell Steward</h5>
            </div>
          </div>
        </div>

        <div className="sidebar-logout">
          <img src={sidebararrow} alt="" />
          <h3>Logout</h3>
        </div>
      </div>
      <div id="contents">
        <SideBarHeader hideMenu={openMenu} />
        <div className="container-fluid">
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
