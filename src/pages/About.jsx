import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./About.scss";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import AnimateReact from "../components/animation/AnimateReact";
import RingLoader from "react-spinners/RingLoader";
import AnimatedAbout from "../components/animation/AnimatedAbout";
const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1200);
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
          <div className="cs">
            <AnimatedLetters text="About" />
            <div className="about__animate_container">
              <AnimatedAbout />
              <AnimateReact />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
