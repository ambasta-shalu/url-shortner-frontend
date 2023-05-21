import React from "react";
import "../css/Navbar.css";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/AuthStore";

function Navbar() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = function () {
    logout();
  };

  const handleUrls = function () {
    navigate("/urls");
  };

  return (
    <div className="navbar">
      <div className="nav__logo">
        <Logo />
      </div>
      <div className="nav__buttons">
        <button className="logout__button" onClick={handleLogout}>
          Logout
        </button>
        <button className="urls__button" onClick={handleUrls}>
          My URLs
        </button>
      </div>
    </div>
  );
}

export default Navbar;
