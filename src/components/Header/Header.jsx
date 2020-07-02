import React from 'react';
import './Header.css';
import DropDownProfile from '../DropDownProfile/DropDownProfile';

const Header = () => {
  return (
    <div className="row bg-color">
      <DropDownProfile />
    </div>
  );
};

export default Header;
