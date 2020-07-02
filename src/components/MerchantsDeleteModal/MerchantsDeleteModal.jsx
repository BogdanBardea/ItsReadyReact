import React, { useState } from 'react';
import './MerchantsDeleteModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function MerchantsDeleteModal(props) {
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
            <div className="container-fluid">
              <div className="modal-title text-center">
                Bent u zeker dat u Business Name wilt verwijderen?
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer className="justify-content-center">
          <div variant="primary" className="profile-button-cancel">
            Annuleren
          </div>
          <div variant="primary" className="profile-button">
            Verwijderen
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MerchantsDeleteModal;
