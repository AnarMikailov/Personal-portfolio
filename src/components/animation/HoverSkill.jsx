import React, { useState } from 'react';
import './HoverSkill.scss';
const HoverSkill = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(click => !click);
  };
  return (
    <div>
      <div className={`all ${click && 'all-click'}`}>
        <div className="lefter">
          <div className="hover-text">Styles</div>
          <p className="text-box">Bootstrap</p>
          <p className="text-box">Tailwind css</p>
          <p className="text-box">Sass </p>
          <p className="text-box">BEM </p>
        </div>
        <div className="left">
          <div className="hover-text">Tools</div>
          <p className="text-box">Npm</p>
          <p className="text-box">Git</p>
          <p className="text-box">Animate CSS </p>
          <p className="text-box">Stripe </p>
        </div>
        <div onClick={handleClick} className="center">
          <div className="explainer">
            {/* {click ? <span>salam</span> : <span>Click me</span>} */}
            <span>Click me</span>
          </div>
          <div className="hover-text">Frontend Development</div>
        </div>
        <div className="right">
          <p className="text-box">Context API</p>
          <p className="text-box">Redux </p>
          <p className="text-box">React Hooks</p>
          <p className="text-box">Router V6</p>
          <div className="hover-text">React Development</div>
        </div>
        <div className="righter">
          <div className="hover-text">Deployment API</div>
          <p className="text-box">Vercel</p>
          <p className="text-box">Netlify</p>
          <p className="text-box">Sanity </p>
          <p className="text-box">Syncfusion</p>
        </div>
      </div>
    </div>
  );
};

export default HoverSkill;
