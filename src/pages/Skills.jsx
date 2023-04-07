import React, { useState, useEffect } from "react";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import SkillBar from "../components/SkillBar";
import "./Skills.scss";
const Skills = () => {
  return (
    <div>
      <Sidebar />
      <div className="container-skill">
        <AnimatedLetters text="Skills" />

        <div className="skillbar-container">
          <SkillBar skillText="HTML" value={80} />
          <SkillBar skillText="CSS" value={75} />
          <SkillBar skillText="Javascript" value={65} />
          <SkillBar skillText="React" value={65} />
          <SkillBar skillText="Sass" value={50} />
          <SkillBar skillText="Responsive design" value={60} />
          <SkillBar skillText="Tailwind CSS" value={30} />
          <SkillBar skillText="Next.js" value={40} />
        </div>
        <h2 className="skills-text">
          As a front-end developer, I am proficient in using Bootstrap for
          building responsive and mobile-first web applications. I have
          extensive experience in using npm for package management and
          development workflows, and I am skilled in using Git for version
          control and collaborative development. I am knowledgeable in using
          Context API for managing global state in React applications, and I am
          familiar with Redux for advanced state management in complex
          applications. I have also implemented React Hooks for reusable logic
          and code organization. I am proficient in using Router v6 for
          navigation and routing in React applications, and I have experience in
          applying design patterns for writing maintainable and scalable code. I
          am also knowledgeable in using BEM methodology for writing modular and
          reusable CSS. Additionally, I am familiar with SEO best practices for
          optimizing web pages for search engines, and I have experience in
          using CSS pre-processors like Sass for writing efficient and
          maintainable stylesheets.
        </h2>
      </div>
    </div>
  );
};

export default Skills;
