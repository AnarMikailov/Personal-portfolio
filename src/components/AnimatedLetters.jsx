import React from "react";
import "./AnimatedLetters.scss";
const AnimatedLetters = (text) => {
  console.log(text);
  return (
    <div>
      <div className="overlay"></div>

      <div className="text">
        <div className="wrapper">
          <div id="L" className="letter">
            L
          </div>
          <div className="shadow">L</div>
        </div>
        <div className="wrapper">
          <div id="I" className="letter">
            I
          </div>
          <div className="shadow">I</div>
        </div>
        <div className="wrapper">
          <div id="G" className="letter">
            G
          </div>
          <div className="shadow">G</div>
        </div>
        <div className="wrapper">
          <div id="H" className="letter">
            H
          </div>
          <div className="shadow">H</div>
        </div>
        <div className="wrapper">
          <div id="T" className="letter">
            T
          </div>
          <div className="shadow">T</div>
        </div>
        <div className="wrapper">
          <div id="N" className="letter">
            N
          </div>
          <div className="shadow">N</div>
        </div>
        <div className="wrapper">
          <div id="E" className="letter">
            E
          </div>
          <div className="shadow">E</div>
        </div>
        <div className="wrapper">
          <div id="S" className="letter">
            S
          </div>
          <div className="shadow">S</div>
        </div>
        <div className="wrapper">
          <div id="Stwo" className="letter">
            S
          </div>
          <div className="shadow">S</div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLetters;
