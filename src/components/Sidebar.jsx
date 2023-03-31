import React from "react";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faEnvelope,
  faHome,
  faUser,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="logo"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      </Link>
      <nav>
        <NavLink activeclassname="active" exact="true" to="/">
          <FontAwesomeIcon icon={faHome} color="#ffd43b" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="about-link"
          exact="true"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#ffd43b" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="skills-link"
          exact="true"
          to="/skills"
        >
          <FontAwesomeIcon icon={faUserSecret} color="#ffd43b" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="project-link"
          exact="true"
          to="/projects"
        >
          <FontAwesomeIcon icon={faCode} color="#ffd43b" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          exact="true"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffd43b" />
        </NavLink>
      </nav>
      <ul className="connections">
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/anar-mikayilov-10647a1a6"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffd43b" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/AnarMikailov">
            <FontAwesomeIcon icon={faGithub} color="#ffd43b" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
