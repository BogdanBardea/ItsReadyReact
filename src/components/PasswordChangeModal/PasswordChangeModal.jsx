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
      <div onClick={handleShow}>Profiel Wijzigen</div>

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
          <div className="d-flex">
            <div className="col modal-body-title">HUIDIG WACTHWOORD</div>
          </div>
          <div className="d-flex">
            <input type="text " className="col modal-body-subtitle " />
          </div>
          <div className="d-flex">
            <div className="col modal-body-title ">NIEUW WACTHWOORD</div>
          </div>
          <div className="d-flex">
            <input type="text" className="col modal-body-subtitle " />
          </div>
          <div className="d-flex">
            <div className="col modal-body-title ">HERHAAL WACTHWOORD</div>
          </div>
          <div className="d-flex">
            <input type="text" className="col modal-body-subtitle " />
          </div>
        </Modal.Body>
        <Modal.Footer>
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
