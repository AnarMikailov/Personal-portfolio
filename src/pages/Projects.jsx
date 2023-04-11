import React from "react";
import AnimateProject from "../components/AnimateProject";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import project from "../data/data";
import "./Projects.scss";
const Projects = () => {
  return (
    <>
      <Sidebar />
      <div className="project-page">
        <AnimatedLetters text="Projects" />
        <div className="project-container">
          <AnimateProject
            title="Ecommerce"
            image="ecommerce"
            description={project.description1}
          />
          <AnimateProject
            title="Admin Dashboard"
            image="dashboard"
            description={project.description2}
          />
          <AnimateProject
            title="GPT3"
            image="gpt3"
            description={project.description3}
          />
          <AnimateProject
            title="Gericht"
            image="gericht"
            description={project.description4}
          />
          <AnimateProject
            title="Dice Game"
            image="rolldice"
            description={project.description5}
          />

          <AnimateProject
            title="Tic Tac Toe"
            image="tictoe"
            description={project.description6}
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
