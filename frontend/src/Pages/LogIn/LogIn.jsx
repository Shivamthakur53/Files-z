import React from "react";
// import "./Login.css";
const LogIn = () => {
  return (
    <div>
      <div className="container">
        <h1>Login</h1>
        <p>Please login to continue</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
};

export default LogIn;
