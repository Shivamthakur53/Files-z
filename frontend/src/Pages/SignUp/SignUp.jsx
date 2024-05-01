import React from "react";
import "./SignUp.css";
import Logo from "../../assets/mainlogo.png";

const SignUp = () => {
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
            <form action="#" className="signup-form">
              <input
                type="email"
                className="email"
                name="email"
                id=""
                placeholder="EMAIL"
              />
              <input
                type="text"
                className="username"
                name="username"
                id=""
                placeholder="USERNAME"
              />
              <input
                type="password"
                name="password"
                className="password"
                id=""
                placeholder="PASSWORD"
              />
            </form>

            <button className="submit-button" type="submit">
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
