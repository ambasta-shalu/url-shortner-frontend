import React from "react";
import "../css/Navbar.css";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handlelogin = function () {
    navigate("/login");
  };

  const handleSignup = function () {
    navigate("/signup");
  };

  return (
    <div className="navbar">
      <div className="nav__logo">
        <Logo />
      </div>
      <div className="nav__buttons">
        <button className="login__button" onClick={handlelogin}>
          Login
        </button>
        <button className="signup__button" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Navbar;
