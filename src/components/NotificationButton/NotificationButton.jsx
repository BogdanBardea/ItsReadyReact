import React from 'react';
import './NotificationButton.css';
import Button from 'react-bootstrap/Button';
import plus from '../../assets/plus.png';
import NewNotificationButton from '../NewNotificationModal/NewNotificationModal';

const NotificationButton = () => {
  return (
    <div>
      <div className="float-right  download-text">
        <Button variant="primary" className="d-flex">
          <img src={plus} alt="Plus" className="mr-3 ml-3" />
          <NewNotificationButton />
        </Button>
      </div>
    </div>
  );
};

export default NotificationButton;
