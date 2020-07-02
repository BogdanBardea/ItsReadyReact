import React, { useState } from 'react';
import './ProfileEditModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ProfileEditModal(props) {
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
            <div className="col modal-body-title">Naam</div>
            <div className="col modal-body-title ">Voornam</div>
          </div>
          <div className="d-flex">
            <input type="text" className="col modal-body-subtitle " />
            <input type="text " className="col modal-body-subtitle " />
          </div>
          <div className="d-flex">
            <div className="col modal-body-title ">E-Mail</div>
            <div className="col modal-body-title ">GSM</div>
          </div>
          <div className="d-flex">
            <input type="text" className="col modal-body-subtitle " />
            <input type="text" className="col modal-body-subtitle " />
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

export default ProfileEditModal;
