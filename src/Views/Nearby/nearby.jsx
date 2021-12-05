import React from "react";
import SideBar from "../../component/SideBar/sidebar";
import "./nearby.css";
import NearByContent from "./nearbycontent";

const NearBy = () => {
  return (
    <div>
      <SideBar>
        <NearByContent />
      </SideBar>
    </div>
  );
};

export default NearBy;
