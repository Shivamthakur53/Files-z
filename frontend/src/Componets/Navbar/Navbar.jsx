import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../assets/mainlogo.png";
const Navbar = () => {
  return (
    <div>
      <div className="main-container">
        <div className="img-box1">
          <img src={Logo} alt="" className="logo" />
          <h2>Drive</h2>
        </div>
        <div className="input-container">
          <input
            className="navinput"
            type="text"
            placeholder="Search in Drive"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
