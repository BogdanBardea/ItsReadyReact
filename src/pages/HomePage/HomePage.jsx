import React from 'react';
import './HomePage.css';
import OrdersCharts from '../../components/OrdersChart/OrdersChart';
import DatePicker from '../../components/DatePicker/DatePicker';
import LiveViewCards from '../../components/LiveViewCards/LiveViewCards';
import DownloadButton from '../../components/DownloadButton/DownloadButton';

const HomePage = () => {
  return (
    <div>
      <div className="col-3 head-title">
        <h3>HOME</h3>
      </div>
      <div className="row mt-5 d-flex">
        <div className="col">
          <DatePicker />
        </div>
        <div className="col float-right">
          <DownloadButton />
        </div>
      </div>
      <div className="col-3 mt-5">
        <OrdersCharts />
      </div>
      <div className="col-3 live-view mt-3">
        <h3>LIVE OVERZICHT</h3>
      </div>
      <div>
        <LiveViewCards />
      </div>
    </div>
  );
};

export default HomePage;
