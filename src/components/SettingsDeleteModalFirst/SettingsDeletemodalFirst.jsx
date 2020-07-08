import React, { useState } from 'react';
import './SettingsDeleteModalFirst.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SettingsDeleteModalFirst(props) {
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
                BEHEERDER VERWIJDEREN
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="container-fluid">
          <div className="container-fluid text-center modal-body-title">
            <div className="text-center modal-body-text">
              Wijs klanten eerst toe aan andere account-manager!
            </div>
          </div>
          <div className="container-fluid body-text">
            <div className="mb-3">ACCOUNT-MANAGER</div>
            <select className="select-manager mr-3">
              <option value="Leandro Bongiorno">Leandro Bongiorno</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <div className="d-flex">
            <div variant="primary" className="profile-button-delete ">
              Annuleren
            </div>
            <div variant="primary" className="profile-button-custom ml-3">
              Toewijzen & verwijderen
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SettingsDeleteModalFirst;
