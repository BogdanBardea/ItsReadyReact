import React from 'react';
import './SettingsBtw.css';
import SettingsButtonThird from '../../components/SettingButtonThird/SettingsButtonThird';
import SettingsButtonFourth from '../../components/SettingsButtonFourth/SettingsButtonFourth';

const SettingsBtw = () => {
  return (
    <div>
      <div className="settings-button-third">
        <SettingsButtonThird />
      </div>
      <div className="settings-button-fourth">
        <SettingsButtonFourth />
      </div>
      <div className="row d-flex mb-4 settingsbtw-title">
        <div className="col head-title ">
          <h3>BTW REGELS</h3>
        </div>
      </div>
      <div className="d-flex ml-5 settingsbtw-body">
        <div className=" mt-5">
          <div className="btw-text ">Bereide gerechten</div>
          <div className="btw-text ">Gerechten zonder bereiding</div>
          <div className="btw-text ">Alcoholische dranken</div>
          <div className="btw-text ">Non-alcoholische dranken</div>
        </div>
        <div className="ml-5 mr-5 ">
          <div className="btw-text mb-3">Afhaal & levering</div>
          <div>
            <input type="text" className="input-btw-first" />%
          </div>
          <div>
            <input type="text" className="input-btw-first" />%
          </div>
          <div>
            <input type="text" className="input-btw-first" />%
          </div>
          <div>
            <input type="text" className="input-btw-first" />%
          </div>
        </div>
        <div className="">
          <div className="btw-text mb-3">Ter plaatse</div>
          <div>
            <input type="text" className="input-btw" />%
          </div>
          <div>
            <input type="text" className="input-btw" />%
          </div>
          <div>
            <input type="text" className="input-btw" />%
          </div>
          <div>
            <input type="text" className="input-btw" />%
          </div>
        </div>
      </div>
      <div className="d-flex ml-5 settingsbtw-buttons">
        <div className="reset-button d-flex align-items-center justify-content-center mr-3">
          Wijzigingen resetten
        </div>
        <div className="reset-second-button d-flex align-items-center justify-content-center">
          Opslaan
        </div>
      </div>
    </div>
  );
};

export default SettingsBtw;
