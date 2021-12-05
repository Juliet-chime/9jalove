import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import profileimg from "../../asset/img/profile-img.svg";
import sidebararrow from "../../asset/img/sidebar-arrow.svg";
import SideBarHeader from "../SideBar/sidebarheader";
import InputField from "../InputField/input";
import search from "../../asset/img/search.svg";
import activeuser from "../../asset/img/activeuser.svg";
import jane from "../../asset/img/jane.svg";

const ChatSideBar = ({ children }) => {
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
        className={`chatside-nav ${
          isMenuActive ? "showsidebar" : "hidesidebar"
        }`}
      >
        <div className="setting-holder">
          <div>
            <ul>
              <li>
                <Link to="/">
                  <i className="fa fa-location-arrow"></i>
                </Link>
              </li>
              <li>
                <Link to="/" className="active">
                  <i className="fa fa-envelope"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  {" "}
                  <i className="fa fa-cog"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div className="chat-logout">
            <img src={sidebararrow} alt="" />
          </div>
        </div>

        <div className="active-holder">
          <div>
            <i className="fa fa-times times" onClick={closeMenu}></i>
          </div>

          <div className="chat-imgprofile">
            <img src={profileimg} alt="" />
            <h3>Ralph Edwards</h3>
            <p>ralph@gmail.com</p>
          </div>

          <div className="activeusers-holder">
            <div className="activeusers">
              <h3>Activer User</h3>
              <p>10</p>
            </div>

            <div className="activeuser-img-holder">
              <div className="activeuser-img">
                <img src={activeuser} alt="" />
                <p></p>
              </div>
              <div className="activeuser-img">
                <img src={activeuser} alt=""/>
                <p></p>
              </div>
              <div className="activeuser-img">
                <img src={activeuser} alt="" />
                <p></p>
              </div>
              <div className="activeuser-img">
                <img src={activeuser} alt=""/>
                <p></p>
              </div>
              <div className="activeuser-img">
                <img src={activeuser} alt=""/>
                <p></p>
              </div>
            </div>
          </div>

          <div className="last-chat">
            <h1>Last Chats</h1>
            <div className="chat-input">
              <InputField
                customStyles={{
                  borderRadius: "8px",
                  background: "#FFFEFE",
                }}
              />
              <p>
                <img src={search} alt=""></img>
                &nbsp;&nbsp;&nbsp;&nbsp;Search for Chat
              </p>
            </div>
          </div>

          <div className="activechat-holder">
            <ul>
              <li>
                <Link to="/">
                  <div className="activechat">
                    <img src={jane} alt="" />
                    <div>
                      <h2>Jane Cooper</h2>
                      <p>Helloo, how are you doing ....</p>
                    </div>
                    <h4>11:32AM</h4>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <div className="activechat">
                    <img src={jane} alt="" />
                    <div>
                      <h2>Jane Cooper</h2>
                      <p>Helloo, how are you doing ....</p>
                    </div>
                    <h4>11:32AM</h4>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <div className="activechat">
                    <img src={jane} alt="" />
                    <div>
                      <h2>Jane Cooper</h2>
                      <p>Helloo, how are you doing ....</p>
                    </div>
                    <h4>11:32AM</h4>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <div className="activechat">
                    <img src={jane} alt="" />
                    <div>
                      <h2>Jane Cooper</h2>
                      <p>Helloo, how are you doing ....</p>
                    </div>
                    <h4>11:32AM</h4>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <div className="activechat">
                    <img src={jane} alt="" />
                    <div>
                      <h2>Jane Cooper</h2>
                      <p>Helloo, how are you doing ....</p>
                    </div>
                    <h4>11:32AM</h4>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="chat-contents">
        <SideBarHeader hideMenu={openMenu} />
        <div className="container-fluid">
          <div className="mt-4">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ChatSideBar;
