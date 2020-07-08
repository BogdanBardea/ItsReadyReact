import React from 'react';
import './MerchantsTable.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';
import arrow from '../../assets/arrow-down.png';
import Switch from '../SwitchButton/SwitchButton';
import MerchantsDetailsModal from '../MerchantsDetailsModal/MerchantsDetailsModal';
import ExtraModal from '../ExtraModal/ExtraModal';
import MerchantsDeleteModal from '../MerchantsDeleteModal/MerchantsDeleteModal';

const MerchantsTable = () => {
  return (
    <div className="container-fluid mt-5">
      <Table>
        <thead className="table-header-merchants">
          <tr className="merchants-table-header">
            <th>
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
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head ">
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
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head ">
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
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head">
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
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head ">
                    GSM <img src={arrow} alt="Arrow Down" />{' '}
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
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head ">
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
            <th>
              {' '}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head ">
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
            <th></th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>
              <div className="ml-3">
                <Switch />
              </div>
            </td>
            <td className="table-data">
              <div className="table-data text-center">Snack inn</div>
            </td>
            <td className="table-data">
              <div className="text-center">Broodjeszaak</div>
            </td>
            <td className="table-data">
              <div className="text-center">Sebastian Mathieu</div>
            </td>
            <td className="table-data">
              <div className="text-center">0488896655</div>
            </td>
            <td className="table-data">
              <div className="text-center">Zandstraat 20, 3660 Oudsbergen</div>
            </td>
            <td className="table-data">
              <div className="text-center">1/10/2020</div>
            </td>
            <td className="table-data">
              {' '}
              <div className="actions-table-button">
                <Dropdown className="actions-dropdown text-center">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="table-text-head actions-dropdown text-center ml-3">
                      Acties <img src={arrow} alt="Arrow Down" />{' '}
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
      </Table>
    </div>
  );
};

export default MerchantsTable;
