import React from 'react';
import './ForgotPassword.css';
import BigLogo from '../../assets/BigLogo.png';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
import EmailIcon from '../../assets/EmailIcon.png';
import PasswordIcon from '../../assets/PasswordIcon.png';
const ForgotPassword = () => {
  return (
    <div
      className="linear-background d-flex justify-content-center align-items-center"
      style={{ maxHeight: '100vh', overflow: 'hidden' }}
    >
      <img src={BigLogo} alt="Big Logo" className="logo-image" />
      <div className="login-title">WACHTWOORD VERGETEN?</div>
      <div className="reset-card mb-3">
        <div className=" d-flex  align-items-center input-forms">
          <InputGroup className=" login-input mt-5">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <img src={EmailIcon} alt="Email Icon" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Email"
              aria-label="Email"
              className="login-input"
            />
          </InputGroup>
        </div>
        <div className=" d-flex align-items-center justify-content-center mt-5">
          <a
            className="reset-button d-flex align-items-center justify-content-center"
            href="/email_sent"
            style={{ marginBottom: '20px' }}
          >
            Wachtwoord herstellen
          </a>
        </div>
      </div>
      <a href="#" className="password-forgot mb-5">
        Terug naar aanmelden
      </a>
      <div className="footer-text">© 2020 IT’S READY</div>
    </div>
  );
};
export default ForgotPassword;
