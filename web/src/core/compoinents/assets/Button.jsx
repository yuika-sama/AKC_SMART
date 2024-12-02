import React from 'react';
import { Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import '../css/button.css'


const ClockOutButton = ({ onClick }) => {
  return (
    <button className="clock-out-button" onClick={onClick}>
      <span>Clock out</span>
    </button>
  );
};

const CreateOrderButton = ({ title, link }) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(link || '/default-route')}
      className="ui button"
    >
      {title}
    </Button>
  );
};

export { CreateOrderButton, ClockOutButton };
