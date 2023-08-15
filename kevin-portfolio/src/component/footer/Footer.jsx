import React from "react";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo"> PortalsHall</a>
      <p className="vision">
        make your life easier by crossing our Portals</p>
      <ul className="links">
        <li>
          <a href="#"> Home</a>
        </li>
        <li>
          <a href="#about"> About</a>
        </li>
        <li>
          <a href="#experience"> Experience</a>
        </li>
        <li>
          <a href="#services"> Services</a>
        </li>
        <li>
          <a href="#portfolio"> Portfolio</a>
        </li>
        <li>
          <a href="#study"> Study</a>
        </li>
        <li>
          <a href="#contact"> Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="linkedin.com/in/chrysravels/">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; PortalsHall .All rights reserverd.</small>
      </div>
    </footer>
  );
};

export default Footer;
