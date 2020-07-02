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
          <div className="container-fluid d-flex">
            <div className="col">
              <div className="modal-body-title">NAAM</div>
              <input type="text" className="input-profile" />
              <div className="modal-body-title">E-MAIL</div>
              <input type="text" className="input-profile" />
            </div>
            <div className="col">
              <div className="modal-body-title">VOORNAM</div>
              <input type="text" className="input-profile" />
              <div className="modal-body-title">GSM</div>
              <input type="text" className="input-profile" />
            </div>
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
