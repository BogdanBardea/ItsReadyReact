import React, { useState } from 'react';
import './SettingsDeleteModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import SettingsDeleteModalFirst from '../SettingsDeleteModalFirst/SettingsDeletemodalFirst';
function SettingsDeleteModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Verwijderen</div>

      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        className="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="container-fluid text-center">
              <div className="modal-title text-center">
                UITNODIGING OPNIEUW VERZENDEN
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid text-center modal-body-title">
            <div className="text-center modal-body-text">
              Weet u zeker dat u opnieuw een uitnodiging wilt versturen?
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <div className="d-flex">
            <div variant="primary" className="profile-button-delete ">
              Annuleren
            </div>
            <div variant="primary" className="profile-button ml-3">
              <SettingsDeleteModalFirst />
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsDeleteModal;
