import React from "react";
import "../css/Navbar.css";
import Logo from "../components/Logo";
import { useAuthStore } from "../store/AuthStore";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handlelogout = function () {
    logout();
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
        <button className="logout__button" onClick={handlelogout}>
          Logout
        </button>
        <button className="signup__button" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </div>
  );
}

export default Navbar;
