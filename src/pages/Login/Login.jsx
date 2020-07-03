import React from 'react';
import './Login.css';
import BigLogo from '../../assets/BigLogo.png';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
import EmailIcon from '../../assets/EmailIcon.png';
import PasswordIcon from '../../assets/PasswordIcon.png';

const Login = () => {
  return (
    <div className="linear-background d-flex justify-content-center align-items-center">
      <img src={BigLogo} alt="Big Logo" className="logo-image" />
      <div className="login-title">Login</div>
      <div className="login-card mb-5">
        <div className=" d-flex  align-items-center input-forms">
          <InputGroup className="mb-3 login-input mt-5">
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
          <InputGroup className="mb-3 login-input">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <img src={PasswordIcon} alt="Password Icon" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Wachtwoord"
              aria-label="Wachtwoord"
              className="login-input"
            />
          </InputGroup>
        </div>
        <div className="d-flex">
          <input type="checkbox" className="input-checkbox ml-5 mt-3" />
          <div className="checkbox-text mt-3 ml-3">Onthoud mij</div>
        </div>
        <div className=" d-flex align-items-center justify-content-center mt-5">
          <button className="login-button">Inloggen</button>
        </div>
      </div>
      <a href="#" className="password-forgot mb-5">
        Wachtwoord vergeten?
      </a>
      <div className="footer-text">© 2020 IT’S READY</div>
    </div>
  );
};

export default Login;
