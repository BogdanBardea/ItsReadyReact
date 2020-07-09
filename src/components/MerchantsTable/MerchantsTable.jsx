import React from 'react';
import './MerchantsTable.css';
import Button from 'react-bootstrap/Button';
import {
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  table,
} from 'react-bootstrap';
import arrow from '../../assets/arrow-down.png';
import Switch from '../SwitchButton/SwitchButton';
import MerchantsDetailsModal from '../MerchantsDetailsModal/MerchantsDetailsModal';
import ExtraModal from '../ExtraModal/ExtraModal';
import MerchantsDeleteModal from '../MerchantsDeleteModal/MerchantsDeleteModal';
import arrowwhite from '../../assets/arrowdownwhite.png';

const MerchantsTable = () => {
  return (
    <div className="container-fluid mt-5">
      <table class="table merchants-table">
        <thead className="table-head-color">
          <tr>
            <th scope="col">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head-status">
                    Status <img src={arrow} alt="Arrow Down" />{' '}
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
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head-status">
                    Zaaknaam <img src={arrow} alt="Arrow Down" />{' '}
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
                    Type zaak <img src={arrow} alt="Arrow Down" />{' '}
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
                    Manager <img src={arrow} alt="Arrow Down" />{' '}
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
                    Gsm <img src={arrow} alt="Arrow Down" />{' '}
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
                    Adres <img src={arrow} alt="Arrow Down" />{' '}
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
                    Actief sinds <img src={arrow} alt="Arrow Down" />{' '}
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
            <td>
              <div className="switch-button-merchants mt-3">
                <Switch />
              </div>
            </td>
            <td>Snack inn</td>
            <td>Broodjeszaak</td>
            <td>Sebastian Mathieu</td>
            <td>0488896655</td>
            <td>
              Zandstraat 20, 3660 <br></br>Oudsbergen
            </td>
            <td>1/10/2020</td>
            <td>
              <div className="actions-table-button">
                <Dropdown className="actions-dropdown text-center">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="table-text-head actions-dropdown text-center ml-3">
                      Acties <img src={arrowwhite} alt="Arrow Down white" />{' '}
                    </div>
                    <div className="dropdown-menu-items">
                      <Dropdown.Menu>
                        <Dropdown.Item href="/login">Login</Dropdown.Item>
                        <div className="divider-bottom"> </div>
                        <Dropdown.Item href="#/action-2">
                          <MerchantsDetailsModal />
                        </Dropdown.Item>
                        <div className="divider-bottom"> </div>
                        <Dropdown.Item href="#/action-2">
                          <ExtraModal />
                        </Dropdown.Item>
                        <div className="divider-bottom"> </div>
                        <Dropdown.Item href="#/action-2">
                          <MerchantsDeleteModal />
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </div>
                  </Dropdown.Toggle>
                </Dropdown>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MerchantsTable;
