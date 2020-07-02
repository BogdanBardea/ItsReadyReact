import React, { useState } from 'react';
import './UserDetailsModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProfileLogo from '../../assets/ProfileLogo.png';
import NewNotificationModalSucces from '../NewNotificationModalSucces/NewNotificationModalSucces';

function UsersDetailsModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Bekijken</div>

      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal-title">LEANDRO BONGIORNO</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex container-fluid">
            <div className="col-lg">
              <div className="d-flex">
                <div className="col modal-body-title">NAAM</div>
                <div className="col modal-body-title">GSM</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">Leandro Bongiorno</div>
                <div className="col modal-body-subtitle">+32 484 83 56 21</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-title">GEBOORTE DATUM</div>
                <div className="col modal-body-title">ACTIEF SINDS</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">26/04/2020</div>
                <div className="col modal-body-subtitle">26/04/2020</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-title">ADRES</div>
              </div>
              <div className="d-flex">
                <div className="col modal-body-subtitle">
                  Zandstraat 20, 3660 Oudsbergen
                </div>
              </div>
              <div className="col modal-body-title">GESLACHT</div>
              <div className="col modal-body-subtitle">Man</div>
              <div className="col modal-body-title">E-MAIL</div>
              <div className="col modal-body-subtitle">info@futurize.be</div>
            </div>

            <div className="col-lg">
              <div className="col logo-text ml-5">PROFIELFOTO</div>
              <div className="col text-right mb-5">
                <img src={ProfileLogo} alt="" />
              </div>
              <div className="col ml-5 mb-3">PUSH BERICHT</div>
              <div className="col text-center">
                {' '}
                <input
                  className="input-user-details"
                  type="text"
                  placeholder="Titel"
                />
              </div>
              <div className="col text-center">
                {' '}
                <input
                  type="text"
                  placeholder="Beschrijving"
                  className="input-user-details"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div variant="primary" className="profile-button">
            <NewNotificationModalSucces />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UsersDetailsModal;
