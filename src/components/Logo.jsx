import React from "react";
import "../css/Logo.css";
import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  const handleClick = function () {
    navigate("/");
  };

  return (
    <div className="logo">
      <h1 className="logo__title nowrap" onClick={handleClick}>
        URL Shortner
      </h1>
    </div>
  );
}

export default Logo;
