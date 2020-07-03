import React from 'react';
import './ForgotPasswordEmailSent.css';
import BigLogo from '../../assets/BigLogo.png';
import MailSent from '../../assets/MailSent.png';

const ForgotPasswordEmailSent = () => {
  return (
    <div>
      <div
        className="linear-background d-flex justify-content-center align-items-center"
        style={{ maxHeight: '100vh', overflow: 'hidden' }}
      >
        <img src={BigLogo} alt="Big Logo" className="logo-image" />

        <div className="reset-succesful d-flex justify-content-center align-items-center">
          <div className="succes-text mb-3">SUCCES !</div>
          <img src={MailSent} alt="Mail Sent" />
        </div>

        <div className="footer-text">© 2020 IT’S READY</div>
      </div>
    </div>
  );
};

export default ForgotPasswordEmailSent;
