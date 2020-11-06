import React, { Component, Fragment } from 'react';
import customers from '../data/data.json';
import CustomerTable from './CustomerTable';
import AddCustomer from './AddCustomer';
import CustomerDetails from './CustomerDetails';

class CustomersList extends Component {
  state = {
    bankCustomers: [...customers],
    selectedCustomer: null,
  };

  handleAddCustomer = (customer) => {
    // console.log('Add Customer', customer);
    this.setState((state, props) => {
      const newCustomers = [...state.bankCustomers]; //  clone

      customer.id = newCustomers.length + 1;

      newCustomers.push(customer);
      return { bankCustomers: newCustomers };
    });
  };

  handleCurrentCustomerSelection = (customer) => {
    this.setState((state, props) => {
      return { selectedCustomer: customer };
    });
  };

  render() {
    return (
      <Fragment>
        <div className='container my-5'>
          <div className='row'>
            <div className='col'>
              <CustomerTable
                customers={this.state.bankCustomers}
                onSelection={this.handleCurrentCustomerSelection}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <AddCustomer onAdd={this.handleAddCustomer} />
            </div>
            <div className='col-md-6'>
              <CustomerDetails customer={this.state.selectedCustomer} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CustomersList;
