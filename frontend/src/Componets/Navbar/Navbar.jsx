import React from "react";
import "../Navbar/Navbar.css";
import Logo from "../../assets/mainlogo.png";
const Navbar = () => {
  return (
    <div>
      <div className="main-container">
        <div className="img-box">
          <img src={Logo} alt="" className="logo" />
        </div>
        <h2>Drive</h2>
        <input className="navinput" type="text" placeholder="Search in Drive" />
      </div>
    </div>
  );
};

export default Navbar;
