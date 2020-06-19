import React from "react";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="logo-image"></div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/resume" className="nav-link">
              <FontAwesomeIcon icon={faFileAlt} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/charlesezra/" className="nav-link">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="https://github.com/charlesezra" className="nav-link">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
          <li className="nav-item">
            <p className="email-vertical">charlesc18@vt.edu</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
