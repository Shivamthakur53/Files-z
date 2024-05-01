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
          <div className="shared">
            <ion-icon name="people-outline"></ion-icon>
            <p>Shared with me</p>
          </div>
          <div className="recent">
            <ion-icon name="time-outline"></ion-icon>
            <p>Recent</p>
          </div>
          <div className="starred">
            <ion-icon name="star-outline"></ion-icon>
            <p>Starred</p>
          </div>
          <div className="spam">
            <ion-icon name="alert-circle-outline"></ion-icon>
            <p>Spam</p>
          </div>
          <div className="trash">
            <ion-icon name="trash-outline"></ion-icon>
            <p>Trash</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
