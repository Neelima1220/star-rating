import React, { FC, useState } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import './style.css';

const App: FC = () => {
  const [curIndex, setCurIndex] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(1);
  console.log(curIndex, hoverValue, 'indexin');
  const handleMouseEnter = (index) => {
    console.log(index, 'index');
    setHoverValue(index + 1);
  };
  const handleClick = (index) => {
    console.log(index, 'click');
    setCurIndex(index + 1);
  };
  const handleMouseLeave = (index) => {
    setHoverValue(index);
  };

  return (
    <div>
      <h1> Star rating</h1>
      {stars.map((star, index: number) => {
        return (
          <AiOutlineStar
            className={index < (hoverValue | curIndex) ? 'nagi' : 'off'}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(curIndex)}
            onClick={() => handleClick(index)}
          />
        );
      })}
      <p> rating is : {curIndex} </p>
    </div>
  );
};

export default App;
