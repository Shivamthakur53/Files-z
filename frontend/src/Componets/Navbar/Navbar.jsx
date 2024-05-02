import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../assets/mainlogo.png";
const Navbar = () => {
  return (
    <div>
      <div className="main-container">
        <div className="img-box1">
          <img src={Logo} alt="" className="logo" />
          <h2 className="Drive">Drive</h2>
        </div>
        <div className="input-container">
          <input
            className="navinput"
            type="text"
            placeholder="Search in Drive"
          />
        </div>

        <div className="main-icon">
          <div className="Question">
            <ion-icon name="help-circle-outline"></ion-icon>
          </div>
          <div className="Setting">
            <ion-icon name="settings-outline"></ion-icon>
          </div>
          <div className="Profile">
            <ion-icon name="ellipse-outline"></ion-icon>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
