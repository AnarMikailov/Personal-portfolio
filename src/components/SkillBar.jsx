import React, { useEffect, useState } from 'react';
import './SkillBar.scss';
const SkillBar = ({ value, skillText }) => {
  const [percent, setPercent] = useState(0);
  let progressEndValue = value - 1;
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(percent => {
        if (percent === progressEndValue) {
          clearInterval(interval);
        }
        return percent + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-skill">
      <div className="skill">
        <div className="skill__text-container">
          <h2 className="skill-text">{skillText} </h2>
        </div>
        <div className="outler">
          <div className="inner">
            <div id="number">{percent}%</div>
          </div>
        </div>
        <svg className="skill-svg" version="1.1" width="160px" height="160px">
          <defs>
            <linearGradient id="GradientColor"></linearGradient>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="75"
            strokeDashoffset={470 - (470 * percent) / 100}
            stroke="#ffd43b"
            strokeWidth={10}
            strokeDasharray={470}
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
};

export default SkillBar;
