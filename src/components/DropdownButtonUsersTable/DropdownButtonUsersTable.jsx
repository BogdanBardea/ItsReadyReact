import React from 'react';
import './DropdownButtonUsersTable.css';
import UserDetailsModal from '../UserDetailsModal/UserDetailsModal';
import DeleteUserModal from '../DeleteUsersModal/DeleteUserModal';
import { Dropdown } from 'react-bootstrap';
import arrow from '../../assets/arrow-down.png';
import arrowwhite from '../../assets/arrowdownwhite.png';
const DropdownButtonUsersTable = () => {
  return (
    <div className="actions-table-button">
      <Dropdown className="actions-dropdown text-center">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <div className="table-text-head actions-dropdown text-center ml-3">
            Acties <img src={arrowwhite} alt="Arrow Down white" />{' '}
          </div>
          <div className="dropdown-menu-items">
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-2">
                <UserDetailsModal />
              </Dropdown.Item>
              <div className="divider-bottom"> </div>
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
