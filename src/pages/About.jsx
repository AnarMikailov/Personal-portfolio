import React from 'react';
import Sidebar from '../components/Sidebar';
import './About.scss';
import AnimatedLetters from '../components/animation/AnimatedLetters';
const About = () => {
  return (
    <div>
      <Sidebar />
      <AnimatedLetters text="About" />
    </div>
  );
};

export default About;
