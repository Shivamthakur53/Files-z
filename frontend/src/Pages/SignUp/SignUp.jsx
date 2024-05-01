import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Sign Up</h1>
          <p>Sign up and start managing your Files Online</p>
          <div className="signup-form">
            <form action="#">
              <input type="email" name="email" id="" placeholder="EMAIL" />
              <input type="text" name="username" id="" placeholder="USERNAME" />
              <input
                type="password"
                name="password"
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
