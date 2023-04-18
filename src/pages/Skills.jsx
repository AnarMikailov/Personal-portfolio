import React, { useState, useEffect } from "react";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import SkillBar from "../components/SkillBar";
import "./Skills.scss";
import HoverSkill from "../components/animation/HoverSkill";

import RingLoader from "react-spinners/RingLoader";
const Skills = () => {
  const [loading, setLoading] = useState(false);
  console.log(loading);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      {loading ? (
        <RingLoader
          color="#ffd43b"
          loading
          size={60}
          cssOverride={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          speedMultiplier={2}
        />
      ) : (
        <>
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
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;
