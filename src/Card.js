import React from 'react';

let img = './image.jpg';

const divFirstHalfStyle = {
  height: '50%',
  width: '100%',
  borderRadius: '14px 14px 0 0',
  backgroundImage: `url("/image.jpg")`
};
const divSecondHalfStyle = {
  height: '50%',
  width: '100%',
  backgroundColor: 'yellow',
  borderRadius: '0 0 14px 14px'
};

const divContainer = {
  height: '400px',
  width: '400px',
  border: '1px solid gray',
  borderRadius: '14px'
};

const Card = props => {
  return (
    <div style={divContainer}>
      <div style={divFirstHalfStyle}>first half</div>
      <div style={divSecondHalfStyle}>second helf</div>
    </div>
  );
};

export default Card;
