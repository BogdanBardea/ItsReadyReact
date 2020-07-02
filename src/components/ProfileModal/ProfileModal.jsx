import React, { useState } from 'react';
import './ProfileModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ProfileEditModal from '../ProfileEditModal/ProfileEditModal';
import PasswordChangeModal from '../PasswordChangeModal/PasswordChangeModal';

function ProfileModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Profiel</div>

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
            <div className="col modal-body-subtitle">Test</div>
            <div className="col modal-body-subtitle">User</div>
          </div>
          <div className="d-flex">
            <div className="col modal-body-title ">E-Mail</div>
            <div className="col modal-body-title ">GSM</div>
          </div>
          <div className="d-flex">
            <div className="col modal-body-subtitle ">info@futurize.be</div>
            <div className="col modal-body-subtitle ">+32 484 83 56 21</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div variant="primary" className="profile-button">
            <ProfileEditModal />
          </div>
          <div variant="primary" className="profile-password-button">
            <PasswordChangeModal />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfileModal;
