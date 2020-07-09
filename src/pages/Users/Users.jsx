import React from 'react';
import './Users.css';
import SearchBarUsers from '../../components/SearchBarUsers/SearchBarUsers';
import UsersTable from '../../components/UsersTable/UsersTable';

const Users = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="page-title">GEBRUIKERS</div>
        <div className="ml-auto merchants-components">
          <SearchBarUsers />
        </div>
      </div>
      <div className="">
        <UsersTable />
      </div>
    </div>
  );
};

export default Users;
