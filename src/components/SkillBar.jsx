// import React, { useState, useEffect } from "react";
// import "./SkillBar.scss";
// // import { AiFillHtml5 } from "react-icons/ai";
// const SkillBar = ({ skillText, value }) => {
//   const [percent, setPercent] = useState(0);

//   const styles = {
//     backGround: `conic-gradient(#4d5bf9' ${percent * 3.6}deg,#cadcff ${
//       percent * 3.6
//     }deg `,

//     color: "black",
//   };

//   let progressEndValue = value - 1;
//   let speed = 50;
//   useEffect(() => {
//     const progress = setInterval(() => {
//       setPercent((percent) => {
//         if (percent === progressEndValue) {
//           clearInterval(progress);
//         }
//         return percent + 1;
//       });
//     }, 70);
//     return () => clearInterval(progress);
//   }, []);
//   return (
//     <div className="skillbar">
//       <div className="container">
//         <img src={require("../data/logo192.png")} alt="planet" />

//         <div className={`circular-progress ${styles}`}>
//           <div className={`value-container `}>{percent} %</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkillBar;

import React, { useEffect, useState } from "react";
import "./SkillBar.scss";
const SkillBar = ({ value }) => {
  const [percent, setPercent] = useState(0);
  let progressEndValue = 85;
  let speed = 50;
  useEffect(() => {
    const progress = setInterval(() => {
      setPercent((percent) => {
        if (percent === progressEndValue) {
          clearInterval(progress);
        }
        return percent + 1;
      });
    }, 30);
    return () => clearInterval(progress);
  }, []);

  return (
    <div className="skill">
      <div className="outler">
        <div className="inner">
          <div id="number">{percent}%</div>
        </div>
      </div>
      <svg
        className="skill-svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke-linecap="round"
          strokeDashoffset={472 - (472 * percent) / 100}
        />
      </svg>
    </div>
  );
};

export default SkillBar;
