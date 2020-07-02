import React from 'react';
import './AddButton.css';
import Button from 'react-bootstrap/Button';
import plus from '../../assets/plus.png';

const AddButton = () => {
  return (
    <div>
      <div className="float-right mr-5 download-text">
        <Button variant="primary">
          <img src={plus} alt="Plus" className="mr-3" />
          Voeg handelaar toe
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default AddButton;
