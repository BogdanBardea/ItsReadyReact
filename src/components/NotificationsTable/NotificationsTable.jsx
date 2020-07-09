import React from 'react';
import './NotificationsTable.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';
import arrow from '../../assets/arrow-down.png';
import trash from '../../assets/trash.png';
import arrowwhite from '../../assets/arrowdownwhite.png';

const NotificationsTable = () => {
  return (
    <table class="table notifications-table mt-5">
      <thead className="table-head-color notifications-table">
        <tr>
          <th scope="col">
            {' '}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="table-text-head-status">
                  Titel
                  <img src={arrow} alt="Arrow Down" />{' '}
                </div>
                <div className="dropdown-menu-items">
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Oplopend</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Aflopend</Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown.Toggle>
            </Dropdown>
          </th>
          <th scope="col">
            {' '}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="table-text-head-status">
                  Boodschap <img src={arrow} alt="Arrow Down" />{' '}
                </div>
                <div className="dropdown-menu-items">
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Oplopend</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Aflopend</Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown.Toggle>
            </Dropdown>
          </th>
          <th scope="col">
            {' '}
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <div className="table-text-head-status">
                  Gepland/verzonden <img src={arrow} alt="Arrow Down" />{' '}
                </div>
                <div className="dropdown-menu-items">
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Oplopend</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Aflopend</Dropdown.Item>
                  </Dropdown.Menu>
                </div>
              </Dropdown.Toggle>
            </Dropdown>
          </th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Notification Titel</td>
          <td>
            <div className="ml-3">
              {' '}
              Zandstraat 20, 3660 Oudsbergen, Zandstraat 20, 3660 Oudsbergen{' '}
            </div>
          </td>
          <td>
            <div className="ml-3"> 1/10/2020 </div>
          </td>
          <td>
            <img src={trash} alt="trash" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default NotificationsTable;
