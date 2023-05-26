import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          Coded with ReactJS{" "}
          <i className="f__text f__heart__symbol">&#10084;</i>
          by <span className="f__text dev__name nowrap"> Shalu Ambasta</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
