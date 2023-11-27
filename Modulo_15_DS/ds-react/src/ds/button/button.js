import React from 'react';
import './Button.css';  

const Button = ({ align, variation, children }) => {
  const classNames = `btn align-${align} variation-${variation}`;
  
  return (
    <button className={classNames}>
      {children}
    </button>
  );
};

export default Button;
