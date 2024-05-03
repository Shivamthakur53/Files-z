import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./SignUp.css";
import axios from "axios";
import Logo from "../../assets/mainlogo.png";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Validation Arrow function
  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "Please enter the value ";
    if (username === null || username === "") {
      isProceed = false;
      errorMessage += "Username";
    }
    if (password === null || password === "") {
      isProceed = false;
      errorMessage += "password";
    }
    if (email === null || email === "") {
      isProceed = false;
      errorMessage += "Email";
    }
    if (!isProceed) {
      toast.warning(errorMessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isProceed = false;
        toast.warning("please enter the valid Email");
      }
    }
    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let registerData = {
      username,
      email,
      password,
    };
    if (isValidate()) {
      axios
        .post("http://localhost:3500/api/create", registerData, {
          method: "Post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            username,
            password,
            email,
          }),
        })
        .then((res) => {
          toast.success("Registered Seccessfull");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed" + err.message);
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="img-box">
            <img src={Logo} alt="" className="logo" />
          </div>
          <h1>Sign Up</h1>
          <p>Sign up and start managing your Files Online</p>
          <div>
            <form action="#" className="signup-form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id=""
                placeholder="EMAIL"
              />
              <input
                type="text"
                className="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id=""
                placeholder="USERNAME"
              />
              <input
                type="password"
                name="password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id=""
                placeholder="PASSWORD"
              />
              <button className="submit-button" type="submit">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
