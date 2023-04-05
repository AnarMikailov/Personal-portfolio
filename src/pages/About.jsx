import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./About.scss";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import AnimateReact from "../components/animation/AnimateReact";
import AnimateStar from "../components/animation/AnimateStar";
const About = () => {
  return (
    <div>
      <Sidebar />
      <div className="about-page">
        <AnimatedLetters text="About" />
        <div className="about-container">
          <div className="about__page-description">
            <p className="about_container-description">
              I am a highly motivated developer who thrives on challenging
              myself and achieving my goals. I have a passion for learning and
              embrace new ideas and technologies with enthusiasm. <br /> In my
              work, I value efficiency and attention to detail and constantly
              strive to improve the quality of my output. I believe that strong
              communication and collaboration are key to success, and I work
              well both independently and as part of a team. Overall, I am
              dedicated to personal and professional growth and am always
              looking for ways to expand my skillset.
            </p>
          </div>
          <div className="about__animate_container">
            <AnimateStar />
            <AnimateReact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
