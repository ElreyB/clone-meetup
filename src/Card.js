import React from 'react';
import Text from './Text';
import CardFooter from './CardFooter';
import './styles/Text.css';

let img = './image/image.png';

const divFirstHalfStyle = {
  height: '50%',
  width: '100%',
  borderRadius: '14px 14px 0 0',
  backgroundImage: `url(${img})`
};
const divSecondHalfStyle = {
  height: '50%',
  width: '100%',
  backgroundColor: 'white',
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
      <div style={divSecondHalfStyle}>
        <Text text="Wenesday, October 03, 8:30 AM" />
        <Text text="Some text that will be in bold later" />
        <CardFooter />
      </div>
    </div>
  );
};

export default Card;
