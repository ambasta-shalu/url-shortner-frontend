import React from "react";
import "../css/Navbar.css";
import Logo from "../components/Logo";
import { useAuthStore } from "../store/AuthStore";
import { FiLogOut } from "react-icons/fi";

function Navbar(props) {
  const { btnName, btnIcon, btnFun } = props;

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
          <FiLogOut />
          Logout
        </button>
        <button className="urls__button nowrap" onClick={btnFun}>
          {btnIcon}
          {btnName}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
