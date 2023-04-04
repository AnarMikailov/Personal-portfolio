import React from "react";
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
              I am hardworking and eager to learn person having clear goals and
              a road map to achieve them, who works tirelessly for every goal i
              set. <br />
              I've been passionate about programming since childhood and I can't
              imagine my life without writing code even a day. My main life
              motto is work hard in silence let your success make the noise
            </p>
            <div className="about__animate_container">
              <AnimateStar />
              <AnimateReact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
