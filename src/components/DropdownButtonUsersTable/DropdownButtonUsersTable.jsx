import React from 'react';
import './DropdownButtonUsersTable.css';
import UserDetailsModal from '../UserDetailsModal/UserDetailsModal';
import DeleteUserModal from '../DeleteUsersModal/DeleteUserModal';
import { Dropdown } from 'react-bootstrap';
import arrow from '../../assets/arrow-down.png';

const DropdownButtonUsersTable = () => {
  return (
    <div className="universal-dropdown-button">
      <Dropdown className="actions-dropdown text-center">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="table-text-head actions-dropdown ml-3">
            Acties <img src={arrow} alt="Arrow Down" />{' '}
          </div>
          <div className="dropdown-menu-items">
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                <UserDetailsModal />
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                <DeleteUserModal />
              </Dropdown.Item>
            </Dropdown.Menu>
          </div>
        </Dropdown.Toggle>
      </Dropdown>
    </div>
  );
};

export default DropdownButtonUsersTable;
