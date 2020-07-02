import React, { useState } from 'react';
import './PasswordChangeModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function PasswordChangeModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Wachtwoord wijzigen</div>

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
          <Modal.Title>MIJN PROFIEL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="modal-body-title">HUIDIG WACHTWOORD</div>
            <input type="text" className="input-profile" />
            <div className="modal-body-title">NIEUW WACHTWOORD</div>
            <input type="text" className="input-profile" />
            <div className="modal-body-title">HERHAAL NIEUW WACHTWOORD</div>
            <input type="text" className="input-profile" />
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div
            variant="primary"
            className="profile-button"
            onClick={handleClose}
          >
            Opslaan
          </div>
          <div
            variant="primary"
            className="profile-password-button"
            onClick={handleClose}
          >
            Annuleren
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PasswordChangeModal;
