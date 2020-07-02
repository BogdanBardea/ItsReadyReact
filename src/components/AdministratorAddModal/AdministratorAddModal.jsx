import React, { useState } from 'react';
import './AdministratorAddModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AdministratorAddModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Voeg beheerder toe</div>

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
            <div className="container-fluid">
              <div className="modal-title">NIEUWE BEHEERDER</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="col modal-body-title">Naam</div>
            <input type="text" className="admin-input" />
            <div className="col modal-body-title">E-MAIL ADRES</div>
            <input type="text" className="admin-input" />
          </div>
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-start">
          <div className=" d-flex justify-content-start">
            <div variant="primary" className="profile-button">
              Uitnodiging versturen
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AdministratorAddModal;
