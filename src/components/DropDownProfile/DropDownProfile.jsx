import React, { useState } from 'react';
import './DropDownProfile.css';

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
    <div className="profile-dropdown ml-auto mr-3">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="ml-auto mr-4 user-text">
            <img src={Avatar} alt="Avatar" class="rounded mr-3"></img>
            Dag, Sebastian
          </div>
          <div className="dropdown-menu-items">
            <Dropdown.Menu>
              <Dropdown.Item className="menu-items">
                <ProfileModal />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">Uitloggen</Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
};

export default DropDownProfile;
