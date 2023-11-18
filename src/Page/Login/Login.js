import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="Container">
      <div className="heading">Venue Admin Login</div>
      <div className="input">
        <input placeholder="Username" />
        <input placeholder="Password" />
      </div>
      <div className="button">
        <button>Sign in</button>
        <p>New Registration?</p>
      </div>
    </div>
  );
};

export default Login;
