import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required placeholder="username" type="text" />
        <input required placeholder="password" type="password" />
        <button>Login</button>
        <p>This is an error!!</p>
        <span>
          Don't have an account <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
