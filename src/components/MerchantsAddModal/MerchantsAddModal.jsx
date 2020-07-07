import React, { useState } from 'react';
import './MerchantsAddModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import edit from '../../assets/edit.png';
import Switch from '../SwitchButton/SwitchButton';
import RestaurantLogo from '../../assets/RestaurantLogo.png';
import Attachment from '../../assets/Attachment.png';

function MerchantsAddModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Voeg handelaar toe</div>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Title>
          <div className="d-flex modal-title">
            <div className="col">
              LOREM IPSUM ITALIAN RESTAURANT
              <img src={edit} alt="edit" />
            </div>
            <div className="d-flex mt-3 status">
              <div className="col status-text">STATUS</div>
              <div className="col">
                <Switch />
              </div>
            </div>
          </div>
        </Modal.Title>
        <Modal.Body>
          <div className="d-flex container-fluid">
            <div className="col-lg mr-3">
              <div className="modal-body-title ">ACCOUNT MANAGER</div>
              <div>
                <select className="input-modal">
                  <option value=""></option>
                </select>
              </div>
              <div className="modal-body-title ">MANAGER</div>
              <div>
                <input type="text" className="input-modal mb-3" />
              </div>
              <div className="modal-body-title ">Adres</div>
              <div>
                <input type="text" className="input-modal mb-3" />
              </div>
              <div className="modal-body-title ">TYPE ZAAK</div>
              <div>
                <select name="" id="" className="input-modal mb-3">
                  <option value=""></option>
                </select>
              </div>
              <div className="modal-body-title ">E-MAIL</div>
              <div>
                <input type="text" className="input-modal mb-3" />
              </div>
            </div>
            <div className="col-lg">
              <div className="modal-body-title ">GSM</div>
              <div>
                <input type="text" className="input-modal mb-3" />
              </div>
              <div className="modal-body-title ">ACTIEF SINDS</div>
              <div className="modal-body-subtitle">26/04/2020</div>
              <div className="modal-body-title ">BTW NR.</div>
              <div>
                <input type="text" className="input-modal mb-3" />
              </div>
            </div>
            <div className="col-lg">
              <div className="col logo-text text-left">LOGO</div>
              <div className="col">
                <img src={RestaurantLogo} alt="" />
              </div>
              <div className="col">
                <img src={Attachment} alt="Pin" />
                Uploaden
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div variant="primary" className="profile-button">
            Details wijzigen
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MerchantsAddModal;
