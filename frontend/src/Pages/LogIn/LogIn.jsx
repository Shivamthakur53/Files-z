import React, { useState } from "react";
import "./LogIn.css";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputColor, setInputColor] = useState("black");
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setInputColor("white");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setInputColor("white");
  };
  return (
    <div>
      <div className="container">
        <h1 className="head">Login</h1>
        <p className="paragrp">Please login to continue</p>
        <input
          type="email"
          onChange={handleEmailChange}
          style={{ color: inputColor }}
          className="emaill"
          placeholder="Email"
        />
        <input
          type="password"
          onChange={handlePasswordChange}
          style={{ color: inputColor }}
          className="passwordd"
          placeholder="Password"
        />
        <div className="additional-info">
          <div className="chek">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <p className="forgot-password">Forgot password?</p>
        </div>
        <button className="loginbtn">Login</button>
      </div>
    </div>
  );
};

export default LogIn;
