import React, { useState } from 'react';
import './DropDownProfile.css';
import DownArrowProfile from '../../assets/arrow-down-profile.png';
import Avatar from '../../assets/Avatar.png';
import {
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';
import ProfileModal from '../ProfileModal/ProfileModal';
const DropDownProfile = () => {
  return (
    <div className="profile-dropdown ml-auto">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="ml-auto mr-4 user-text">
            <img src={Avatar} alt="Avatar" class="rounded mr-3"></img>
            Dag, Sebastian{' '}
            <img src={DownArrowProfile} alt="Arrow Down" className="ml-3" />
          </div>
          <Dropdown.Menu>
            <div className="dropdown-menu-items">
              <Dropdown.Item className="menu-items">
                <ProfileModal />
              </Dropdown.Item>
              <div className="divider-bottom"> </div>
              <Dropdown.Item href="#/action-2">
                <div className="mb-3">Uitloggen</div>
              </Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
};

export default DropDownProfile;
