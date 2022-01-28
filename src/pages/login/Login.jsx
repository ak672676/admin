import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <h1 className="brand">Admin</h1>
        <form className="loginForm">
          <div className="loginFormItem">
            <input type="text" placeholder="Username" />
          </div>
          <div className="loginFormItem">
            <input type="password" placeholder="Password" />
          </div>
          <div className="loginFormItem">
            <button className="loginButton">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
