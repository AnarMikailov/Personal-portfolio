import React from 'react';
import './AnimatedLetters.scss';
const AnimatedLetters = ({ text }) => {
  const arr = [...text];
  console.log(arr);
  return (
    <>
      <div className="text">
        {arr.map((el, index) => (
          <div key={el + index} className="wrapper">
            <div id={el} className="letter">
              {el}
            </div>
            <div className="shadow">{el}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AnimatedLetters;
