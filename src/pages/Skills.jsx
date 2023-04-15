import React from 'react';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import Sidebar from '../components/Sidebar';
import SkillBar from '../components/SkillBar';
import './Skills.scss';
import SkillButton from '../components/animation/SkillButton';
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
          <SkillBar skillText="Next.js" value={50} />
          <SkillBar skillText="Responsive design" value={60} />
          <SkillBar skillText="Sass" value={50} />
          <SkillBar skillText="Tailwind CSS" value={70} />
        </div>
        <SkillButton />
      </div>
    </div>
  );
};

export default Skills;
