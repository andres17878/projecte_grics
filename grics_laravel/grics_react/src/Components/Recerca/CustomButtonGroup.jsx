import React from 'react';

const CustomNavigationButtons = ({ onPrevClick, onNextClick }) => {
  return (
    <div>
      <button onClick={onPrevClick}>Prev</button>
      <button onClick={onNextClick}>Next</button>
    </div>
  );
};

export default CustomNavigationButtons;
