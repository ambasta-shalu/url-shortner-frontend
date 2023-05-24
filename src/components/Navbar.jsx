import React from "react";
import "../css/Navbar.css";
import Logo from "../components/Logo";
import { useAuthStore } from "../store/AuthStore";

function Navbar(props) {
  const { btnName, btnFun } = props;

  const logout = useAuthStore((state) => state.logout);

  const handleLogout = function () {
    logout();
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
        <button className="urls__button" onClick={btnFun}>
          {btnName}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
