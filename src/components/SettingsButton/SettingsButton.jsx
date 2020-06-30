import React from 'react';
import './SettingsButton.css';
import Button from 'react-bootstrap/Button';
import plus from '../../assets/plus.png';

const SettingsButton = () => {
  return (
    <div>
      <div className="float-right mr-5 download-text">
        <Button variant="primary">
          <img src={plus} alt="Plus" className="mr-3 ml-3" />
          Voeg beheerder toe
        </Button>
      </div>
    </div>
  );
};

export default SettingsButton;
