import React from 'react';
import './Notifications.css';
import NotificationSearchBar from '../../components/NotificationSearchBar/NotificationSearchBar';
import NotificationButton from '../../components/NotificationButton/NotificationButton';
import NotificationsTable from '../../components/NotificationsTable/NotificationsTable';

const Notifications = () => {
  return (
    <div>
      <div className="row d-flex">
        <div className="col head-title">
          <h3>PUSHBERICHTEN</h3>
          <div className="col float-right">
            <NotificationButton />
            <NotificationSearchBar />
          </div>
        </div>
      </div>
      <div>
        <NotificationsTable />
      </div>
    </div>
  );
};

export default Notifications;
