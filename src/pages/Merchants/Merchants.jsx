import React from 'react';
import './Merchants.css';
import SearchBarMerchants from '../../components/SearchBar/SearchBarMerchants';
import AddButton from '../../components/AddButton/AddButton';
import MerchantsTable from '../../components/MerchantsTable/MerchantsTable';

const Merchants = () => {
  return (
    <div>
      <div className="row d-flex">
        <div className="col head-title">
          HANDELAARS
          <div className="col float-right">
            <AddButton />
            <SearchBarMerchants />
          </div>
        </div>
      </div>
      <div>
        <MerchantsTable />
      </div>
    </div>
  );
};

export default Merchants;
