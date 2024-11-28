import React from 'react';
import "../css/ClockOutButton.css";


const ClockOutButton = ({ onClick }) => {
  return (
    <button className="clock-out-button" onClick={onClick}>
      <span>Clock out</span>
    </button>
  );
};

export default ClockOutButton;