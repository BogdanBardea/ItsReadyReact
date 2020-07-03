import React, { useState } from 'react';
import './MerchantsDetailsModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import edit from '../../assets/edit.png';
import Switch from '../SwitchButton/SwitchButton';
import RestaurantLogo from '../../assets/RestaurantLogo.png';

function MerchantsDetailsModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Details</div>

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
              LOREM IPSUM ITALIAN RESTAURANT <img src={edit} alt="edit" />
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
            <div className="col-lg">
              <div className="d-flex">
                <div className="col modal-body-title">ACCOUNT MANAGER</div>
                <div className="col modal-body-title">GSM</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">Leandro Bongiorno</div>
                <div className="col modal-body-subtitle">+32 484 83 56 21</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-title">MANAGER</div>
                <div className="col modal-body-title">ACTIEF SINDS</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">Sebastian Mathieu</div>
                <div className="col modal-body-subtitle">26/04/2020</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-title">ADRES</div>
                <div className="col modal-body-title">BTW NR.</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">
                  Zandstraat 20, 3660 Oudsbergen
                </div>
                <div className="col modal-body-subtitle">BE 0713.682.349</div>
              </div>
              <div className="col modal-body-title">TYPE ZAAK</div>
              <div className="col modal-body-subtitle">Broodjeszaak</div>
              <div className="col modal-body-title">E-MAIL</div>
              <div className="col modal-body-subtitle">info@futurize.be</div>
            </div>

            <div className="col-lg">
              <div className="col logo-text">LOGO</div>
              <div className="col text-right">
                <img src={RestaurantLogo} alt="" />
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

export default MerchantsDetailsModal;
