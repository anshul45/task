import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, SetuserName] = useState("");
  const [password, SetPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  const handleClick = async () => {
    try {
      setErrorMsg("");
      const res = await axios.post(
        "https://stg.dhunjam.in/account/admin/login",
        {
          username,
          password,
        }
      );
      const token = res.data.data.token;
      localStorage.setItem("auth_token", token);
      navigate("/");
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        let errorMessage = "Login failed. Please try again.";

        if (data && data.ui_err_msg) {
          errorMessage = data.ui_err_msg;
        } else errorMessage = data.username || data.password;
        setErrorMsg(errorMessage);
      }
    }
  };

  return (
    <div className="Container">
      <div className="heading">Venue Admin Login</div>
      <div className="input">
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => SetuserName(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
      </div>
      {errormsg && <div>{errormsg}</div>}
      <div className="button">
        <button onClick={handleClick}>Sign in</button>
        <p>New Registration?</p>
      </div>
    </div>
  );
};

export default Login;
