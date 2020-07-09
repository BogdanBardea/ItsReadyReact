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
import arrowwhite from '../../assets/arrowdownwhite.png';
const SettingsTable = () => {
  return (
    <div className="container-fluid mt-5">
      <table class="table merchants-table">
        <thead className="table-head-color">
          <tr>
            <th scope="col">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head-status">
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
            <th scope="col">
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <div className="table-text-head-status">
                    E-mail <img src={arrow} alt="Arrow Down" />{' '}
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
            <td>Gianluca Punzo</td>
            <td>info@futurize.be</td>
            <td>0484835621</td>
            <td>Actief</td>
            <td>1/10/2020</td>
            <td>
              <div>
                <div className="actions-table-button">
                  <Dropdown className="actions-dropdown text-center">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <div className="table-text-head actions-dropdown text-center ml-3">
                        Acties <img src={arrowwhite} alt="Arrow Down white" />{' '}
                      </div>
                      <div className="dropdown-menu-items">
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-2">
                            <SettingsDeleteModalFirst />
                          </Dropdown.Item>
                          <div className="divider-bottom"> </div>
                          <Dropdown.Item href="#/action-2">
                            <SettingsDeleteModal />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </div>
                    </Dropdown.Toggle>
                  </Dropdown>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SettingsTable;
