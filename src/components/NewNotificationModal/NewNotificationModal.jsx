import React, { useState } from 'react';
import './NewNotificationModal.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewNotificationModalSucces from '../NewNotificationModalSucces/NewNotificationModalSucces';

function NewNotificationModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow}>Verstuur bericht</div>

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
          <Modal.Title>
            <div className="modal-title">NIEUW BERICHT</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container-fluid">
            <div className="d-flex">
              <div className="col modal-body-title">TITEL</div>
              <div className="col modal-body-title">
                GEBRUIKERS DIE OOIT HEBBEN BESTELD BIJ:
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-subtitle">
                <input type="text" className="principal-input" />
              </div>
              <div className="col modal-body-subtitle">
                <select className="select-category" placeholder="Selecteer">
                  <option value="grapefruit" className="option-category">
                    Pizzeria
                  </option>
                  <option value="lime" className="option-category">
                    Frituur
                  </option>
                  <option selected value="coconut" className="option-category">
                    Kebabzaak
                  </option>
                </select>
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-title">BOODSCHAP</div>
              <div className="col modal-body-title">
                <div className="col">
                  <div className="choice-text mb-3">Verstuur nu</div>
                  <div className="choice-text">Plannen voor later</div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-subtitle">
                <input type="text" className="principal-input" />
              </div>
              <div className="col modal-body-subtitle">
                DATE PICKER COMPONENT
              </div>
            </div>
            <div className="d-flex">
              <div className="col modal-body-title">
                <div className="col">
                  <div className="choice-text mb-3">Verstuur nu</div>
                  <div className="choice-text">Plannen voor later</div>
                </div>
              </div>
            </div>
            <div className="col location-text-title">
              GEBRUIKER IN DE BUURT VAN
            </div>
            <div className="col modal-body-title">
              <input type="text" className="principal-input" />
              <input type="text" className="secondary-input ml-3" />
              <div className="location-text mb-3">KM rond deze locatie</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-start">
          <div variant="primary" className="profile-button-delete">
            Annuleren
          </div>
          <div variant="primary" className="profile-button">
            <NewNotificationModalSucces />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewNotificationModal;
