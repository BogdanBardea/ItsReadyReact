import React from 'react';
import './Header.css';
import DropDownProfile from "../DropDownProfile/DropDownProfile";

const Header = () => {
  return (
    <div className="bg-color row option">
  <DropDownProfile />
    </div>
  );
};

export default Header;
