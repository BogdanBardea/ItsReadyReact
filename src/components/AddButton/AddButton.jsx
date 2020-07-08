import React from 'react';
import './AddButton.css';
import Button from 'react-bootstrap/Button';
import plus from '../../assets/plus.png';
import MerchantsAddModal from '../MerchantsAddModal/MerchantsAddModal';

const AddButton = () => {
  return (
    <div>
      <div className="float-right download-text">
        <Button variant="primary">
          <img src={plus} alt="Plus" className="mr-3" />
          <MerchantsAddModal />
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default AddButton;
