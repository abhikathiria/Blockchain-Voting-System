import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          <a
            className="profile"
            href="https://github.com/abhikathiria"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            href="https://github.com/abhikathiria"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abhi | Fenil | Nandish
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
