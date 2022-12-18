import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Finn</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#motivation" className="footer__link">
              Motivation
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.instagram.com/lotuzfang/" className="footer__social-link" target="_blank">
            <i class="uil uil-instagram"></i>
          </a>

          <a href="https://www.facebook.com/profile.php?id=100003570400070" className="footer__social-link" target="_blank">
            <i class="uil uil-facebook"></i>
          </a>
          <a href="https://www.behance.net/o8786791c2a3" className="footer__social-link" target="_blank">
            <i class="uil uil-behance"></i>
          </a>

       
          <a href="https://github.com/finnzzzz" className="footer__social-link" target="_blank">
            <i class="uil uil-github"></i>
          </a>
        </div>

        <span className="footer__copy">
          {/* &#169; Crypticalcoder. All rigths reserved */}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
