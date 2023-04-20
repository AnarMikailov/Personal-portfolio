import React, { useEffect, useState } from "react";
import AnimatedLetters from "../components/animation/AnimatedLetters";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import "./Home.scss";
import RingLoader from "react-spinners/RingLoader";
const Home = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
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
          <div className="home-page ">
            <div className="home__page-header">
              <div className="home__page-letters_container">
                <AnimatedLetters text="Hi, I'm Anar" />
                <div className="home__page-web">
                  <AnimatedLetters text="Web developer. " />
                </div>
              </div>

              <div className="home__page-image_container">
                <img
                  src={require("../data/Avatar-fotor-bg-remover-2023040120500.png")}
                  alt="Anar"
                />
              </div>
            </div>
            <div className="home__page-link_container">
              <Link to="/contact">
                <button className="btn home__page__link__container-wiggle ">
                  Contact
                </button>
              </Link>
              <Link
                to="https://acrobat.adobe.com/id/urn:aaid:sc:EU:853b7405-ceee-434d-a2bf-bed3736b0fd3"
                target="_blank"
              >
                <button className="btn home__page__link__container-resume ">
                  Resume
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className=" home__page__link__container-cv_icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
