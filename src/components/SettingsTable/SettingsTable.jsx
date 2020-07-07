import React from 'react';
import './SettingsTable.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import {
  DropdownButton,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from 'react-bootstrap';
import arrow from '../../assets/arrow-down.png';
import SettingsDeleteModal from '../SettingsDeleteModal/SettingsDeletemodal';
import SettingsDeleteModalFirst from '../SettingsDeleteModalFirst/SettingsDeletemodalFirst';
const SettingsTable = () => {
  return (
    <div className="mt-5">
      <Table>
        <thead className="table-header">
          <tr>
            <th>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head ml-3">
                    Naam <img src={arrow} alt="Arrow Down" />{' '}
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
                  <div className="table-text-head ml-3">
                    E-Mail <img src={arrow} alt="Arrow Down" />{' '}
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
                  <div className="table-text-head ml-3">
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
                  <div className="table-text-head">
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
                  <div className="table-text-head">
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
              <div className="ml-3"> Gianluca Punzo </div>
            </td>
            <td>
              <div className="ml-3">info@futurize.be</div>
            </td>
            <td>
              <div className="ml-3">0484835621</div>
            </td>
            <td>
              <div className="ml-3">Actief</div>
            </td>
            <td>
              <div className="ml-3">1/10/2020</div>
            </td>
            <td>
              <div className="actions-table-button">
                <Dropdown className="actions-dropdown">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="table-text-head actions-dropdown ml-3">
                      Acties <img src={arrow} alt="Arrow Down" />{' '}
                    </div>
                    <div className="dropdown-menu-items">
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-2">
                          <SettingsDeleteModal />
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">
                          <SettingsDeleteModalFirst />
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

export default SettingsTable;
