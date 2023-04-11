import React from "react";
import "./AnimateProject.scss";

const AnimateProject = ({ title, image, description }) => {
  return (
    <div className="project-animation">
      <div className="project-title">{title}</div>

      <div className="project__img-container">
        <img
          className="project-img"
          src={require(`../data/${image}.PNG`)}
          alt={`${image}`}
        />
      </div>
      <div className="project-description">
        <p className="project-text">{description}</p>
      </div>

      <div className="project-button">
        <a className="btn">Go to project</a>
        <a className="btn">Go to code</a>
      </div>
    </div>
  );
};

export default AnimateProject;
