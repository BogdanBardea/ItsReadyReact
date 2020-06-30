import React from 'react';
import './Settings.css';
import SettingsButton from '../../components/SettingsButton/SettingsButton';
import SettingsTable from '../../components/SettingsTable/SettingsTable';

const Settings = () => {
  return (
    <div>
      <div className="row d-flex">
        <div className="col head-title">
          <h3>BEHEERDERS</h3>
          <div className="col float-right">
            <SettingsButton />
          </div>
        </div>
      </div>
      <div>
        <SettingsTable />
      </div>
    </div>
  );
};

export default Settings;
