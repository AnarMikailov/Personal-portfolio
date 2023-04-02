import React from 'react';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import Sidebar from '../components/Sidebar';
import './Skills.scss';
const Skills = () => {
  return (
    <div>
      <Sidebar />
      <AnimatedLetters text="Skills" />
    </div>
  );
};

export default Skills;
