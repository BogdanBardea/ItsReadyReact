import React from 'react';
import './Users.css';
import SearchBarUsers from '../../components/SearchBarUsers/SearchBarUsers';
import UsersTable from '../../components/UsersTable/UsersTable';

const Users = () => {
  return (
    <div>
      <div className="row d-flex">
        <div className="col head-title">
          <h3>GEBRUIKERS</h3>
          <div className="col float-right">
            <SearchBarUsers />
          </div>
        </div>
      </div>
      <UsersTable />
    </div>
  );
};

export default Users;
