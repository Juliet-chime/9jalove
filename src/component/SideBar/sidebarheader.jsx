import React from "react";
import "./sidebar.css";

const SideBarHeader = ({ hideMenu }) => {
  return (
    <div>
      <i className="fa fa-bars bar-icon" onClick={hideMenu}></i>
    </div>
  );
};

export default SideBarHeader;
