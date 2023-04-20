import "./Sidebar.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faSourcetree,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faClose,
  faCode,
  faHome,
  faUser,
  faUserSecret,
  faEnvelope,
  faDownload,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleDownload = () => {
    fetch("Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img
          className="nav-logo"
          src={require("../data/Avatar-fotor-bg-remover-2023040120500.png")}
          height="60px"
          width="60px"
          alt="Anar"
        />
      </Link>

      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink activeclassname="active" exact="true" to="/home">
          <FontAwesomeIcon icon={faHome} color="#ffd43b" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="about-link"
          exact="true"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#ffd43b" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faUserSecret} color="#ffd43b" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="project-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faCode} color="#ffd43b" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffd43b" />
        </NavLink>
        <div className="cl">
          <NavLink
            style={{ fontSize: "20px" }}
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="linkedin-link"
            to="https://www.linkedin.com/in/anarmikayilov1/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffd43b" />
          </NavLink>
          <NavLink
            style={{ fontSize: "20px" }}
            onClick={() => setShowNav(false)}
            activeclassname="active"
            className="github-link"
            to="https://github.com/AnarMikailov"
            target="_blank"
          >
            <FontAwesomeIcon size="1x" icon={faGithub} color="#ffd43b" />
          </NavLink>
        </div>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul className="connections">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/anar-mikayilov-10647a1a6"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffd43b" />
          </a>
        </li>
        <li>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/AnarMikailov"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffd43b" />
          </a>
        </li>
        <li>
          <a rel="noreferrer">
            <FontAwesomeIcon
              title="Resume"
              style={{ cursor: "pointer" }}
              onClick={handleDownload}
              icon={faDownload}
              color="#ffd43b"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AnarMikailov/Personal-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              title="Source code"
              icon={faDatabase}
              color="#ffd43b"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
