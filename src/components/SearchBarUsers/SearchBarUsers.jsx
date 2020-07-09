import React from 'react';
import './SearchBarUsers.css';
import { ReactComponent as ReactLogo } from '../../assets/search.svg';
import { FormControl, InputGroup } from 'react-bootstrap';
const SearchBarUsers = () => {
  return (
    <InputGroup className="mb-3 ml-auto">
      <FormControl
        placeholder="Zoek gebruiker"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        className="searchbar-merchants"
      />
      <InputGroup.Append>
        <button className="searchbar-button">
          {' '}
          <div className="search-icon">
            <ReactLogo />
          </div>
        </button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SearchBarUsers;
