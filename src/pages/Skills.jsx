import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import Sidebar from '../components/Sidebar';
import SkillBar from '../components/SkillBar';
import './Skills.scss';
import HoverSkill from '../components/animation/HoverSkill';
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
        <HoverSkill />
        {/* <div className="skill__text-container">
          <h2 className="skills-text">
            As a front-end developer, I'm skilled in Bootstrap for responsive
            and mobile-first web app development. I have experience in using npm
            for package management, Git for version control, and Context API for
            global state management in React. I also have experience with Redux
            for advanced state management and React Hooks for reusable logic.
          </h2>
          <h2 className="skills-text">
            I'm proficient in Router v6 for navigation, design patterns for
            maintainable code, and BEM for modular CSS. Additionally, I'm
            familiar with SEO best practices, CSS pre-processors like Sass, and
            writing efficient stylesheets. Also I familiar with deploying web
            applications to Vercel and Netlify
          </h2>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
