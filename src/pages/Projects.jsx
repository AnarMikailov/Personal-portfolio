import React, { useEffect, useState } from "react";
import AnimateProject from "../components/animation/AnimateProject";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import project from "../data/data";
import "./Projects.scss";
import RingLoader from "react-spinners/RingLoader";
const Projects = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <>
      {loading ? (
        <RingLoader
          color="#ffd43b"
          loading
          size={60}
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          speedMultiplier={2}
        />
      ) : (
        <>
          <Sidebar />
          <div className="project-page">
            <AnimatedLetters text="Projects" />
            <div className="project-container">
              <AnimateProject
                title="Ecommerce"
                image="ecommerce"
                description={project.description1}
                link={project.linkEcommerce}
                code={project.codeEcommerce}
              />
              <AnimateProject
                title="Admin Dashboard"
                image="dashboard"
                description={project.description2}
                link={project.linkDashboard}
                code={project.codeDashboard}
              />
              <AnimateProject
                title="GPT3"
                image="gpt3"
                description={project.description3}
                link={project.linkGpt3}
                code={project.codeGpt3}
              />
              <AnimateProject
                title="Gericht"
                image="gericht"
                description={project.description4}
                link={project.linkGericht}
                code={project.codeGericht}
              />
              <AnimateProject
                title="Dice Game"
                image="rolldice"
                description={project.description5}
                link={project.linkDice}
                code={project.codeDice}
              />
              <AnimateProject
                title="Bankist"
                image="bankist"
                description={project.description6}
                link={project.linkBankist}
                code={project.codeBankist}
              />

              <AnimateProject
                title="Tic Tac Toe"
                image="tictoe"
                description={project.description7}
                link={project.linkTicTacToe}
                code={project.codeTicTacToe}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
