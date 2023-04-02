import React from 'react';
import './Button.scss';
const Button = ({ children }) => {
  return (
    <div>
      <button>{children}</button>
    </div>
  );
};

export default Button;
