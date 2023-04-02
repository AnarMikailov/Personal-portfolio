import React from 'react';
import AnimatedLetters from '../components/animation/AnimatedLetters';
import Sidebar from '../components/Sidebar';
import './Projects.scss';
const Projects = () => {
  return (
    <div>
      <Sidebar />
      <AnimatedLetters text="Projects" />
    </div>
  );
};

export default Projects;
