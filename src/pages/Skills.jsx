import React, { useState, useEffect } from "react";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import SkillBar from "../components/SkillBar";
import "./Skills.scss";
const Skills = () => {
  return (
    <div>
      <Sidebar />
      <AnimatedLetters text="Skills" />
      <div className="container-skill">
        {/* <SkillBar skillText="HTML" value={85} /> */}
        <SkillBar skillText="CSS" value={80} />
        <SkillBar skillText="Javascript" value={30} />
        <SkillBar skillText="React" value={100} />
        <SkillBar skillText="React" value={10} />
        <SkillBar skillText="React" value={60} />
      </div>
    </div>
  );
};

export default Skills;
