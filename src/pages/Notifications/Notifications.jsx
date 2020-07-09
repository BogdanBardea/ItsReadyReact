import React from 'react';
import './Notifications.css';
import NotificationSearchBar from '../../components/NotificationSearchBar/NotificationSearchBar';
import NotificationButton from '../../components/NotificationButton/NotificationButton';
import NotificationsTable from '../../components/NotificationsTable/NotificationsTable';

const Notifications = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="page-title">PUSHBERICHTEN</div>
        <div className="ml-auto merchants-components">
          <NotificationSearchBar />
        </div>
        <div className="merchants-components-second">
          <NotificationButton />
        </div>
      </div>
      <div className="">
        <NotificationsTable />
      </div>
    </div>
  );
};

export default Notifications;
