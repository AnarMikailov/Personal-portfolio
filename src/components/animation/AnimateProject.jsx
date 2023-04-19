import React from "react";
import "./AnimateProject.scss";

const AnimateProject = ({ title, image, description, link, code }) => {
  return (
    <div className="project-animation">
      <div className="project-title">{title}</div>

      <div className="project__img-container">
        <img
          className="project-img"
          src={require(`../../data/${image}.PNG`)}
          alt={`${image}`}
        />
      </div>
      <div className="project-description">
        <p className="project-text">{description}</p>
      </div>

      <div className="project-button">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={link}
          className="btn"
        >
          Go to project
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={code}
          className="btn"
        >
          Go to code
        </a>
      </div>
    </div>
  );
};

export default AnimateProject;
