import React, { Component, Fragment } from 'react';
import customers from '../data/data.json';
import CustomerTable from './CustomerTable';
import AddCustomer from './AddCustomer';
import CustomerDetails from './CustomerDetails';

class CustomersList extends Component {
  render() {
    return (
      <Fragment>
        <div className='container my-5'>
          <div className='row'>
            <div className='col'>
              <CustomerTable customers={customers} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <AddCustomer />
            </div>
            <div className='col-md-6'>
              <CustomerDetails
                id={12}
                firstName='Bill'
                lastName='Gates'
                email='bill@microsoft.com'
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CustomersList;
