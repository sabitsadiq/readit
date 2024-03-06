import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required placeholder="username" type="text" />
        <input required placeholder="email" type="email" />
        <input required placeholder="password" type="password" />
        <button>Register</button>
        <p>This is an error!!</p>
        <span>
          Do have an account <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
