import React, { useState } from "react";
import "./LogIn.css";
import axios from "axios";
import { toast } from "react-toastify";
import Logo from "../../assets/mainlogo.png";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/api/loginUser", {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        const userdata = response.data;
        const userdataString = JSON.stringify(userdata);
        localStorage.setItem("userdata", userdataString);
        localStorage.setItem("token", token);

        navigate("/");
        toast.success("successsssssssss");
      } else {
        console.error("fail");
        toast.error("faillllllll");
      }
    } catch (error) {
      console.log("error", error.message);
      toast.error("error", error.message);
    }
  };
  return (
    <div>
      <div className="container">
        <div className="img-box">
          <img src={Logo} alt="" className="logo" />
        </div>
        <h1 className="head">Login</h1>
        <p className="paragrp">Please login to continue</p>
        <form action="#" className="signup-form" onSubmit={handleLogin}>
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
              <p>Remember Me</p>
            </div>
            <p className="forgot-password">Forgot password?</p>
          </div>
          <button className="loginbtn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
