import React, { useState } from 'react';
import './ExtraModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Switch from '../SwitchButton/SwitchButton';

function ExtraModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Extra's</div>

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
              <div className="modal-title-custom">Extra’s</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid d-flex">
            <div className="col modal-body-title-custom">Payconiq</div>
            <div className="col text-right">
              <Switch />
            </div>
          </div>
          <div className="container-fluid d-flex">
            <div className="col modal-body-title-custom">Groepsbestelling</div>
            <div className="col text-right">
              <Switch />
            </div>
          </div>
          <div className="container-fluid d-flex">
            <div className="col modal-body-title-custom">Klantenkaart</div>
            <div className="col text-right">
              <Switch />
            </div>
          </div>
          <div className="container-fluid d-flex">
            <div className="col modal-body-title-custom">Allergenen</div>
            <div className="col text-right">
              <Switch />
            </div>
          </div>
          <div className="container-fluid d-flex">
            <div className="col modal-body-title-custom">SMS/WhatsApp</div>
            <div className="col text-right">
              <Switch />
            </div>
          </div>
          <div className="container-fluid d-flex">
            <div className="col modal-body-title-custom">Weergeven in overkoepelende app</div>
            <div className="col text-right">
              <Switch />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default ExtraModal;
