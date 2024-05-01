import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="add">
          <button className="add-new">
            <ion-icon name="add-outline"></ion-icon>
            <p>New</p>
          </button>
          <div className="home">
            <ion-icon name="home"></ion-icon>
            <p>Home</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
