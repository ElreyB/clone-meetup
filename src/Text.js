import React from 'react';

const Text = ({ text, pStyle, divStyle, ...props }) => {
  return (
    <div className={divStyle}>
      <p style={pStyle}>{text}</p>
    </div>
  );
};

export default Text;
