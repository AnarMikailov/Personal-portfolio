import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import Sidebar from '../components/Sidebar';
import SkillBar from '../components/SkillBar';
import './Skills.scss';
const Skills = () => {
  return (
    <div>
      <Sidebar />
      <div className="container-skill">
        <div>
          <AnimatedLetters text="Skills" />
        </div>
        <div className="skillbar-container">
          <SkillBar skillText="HTML" value={80} />
          <SkillBar skillText="CSS" value={75} />
          <SkillBar skillText="Javascript" value={65} />
          <SkillBar skillText="React" value={65} />
          <SkillBar skillText="Sass" value={50} />
          <SkillBar skillText="Responsive design" value={60} />
          <SkillBar skillText="Tailwind CSS" value={30} />
          <SkillBar skillText="Botsrtap" value={20} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
