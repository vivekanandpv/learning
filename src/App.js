import React, { Component, Fragment } from 'react';
import AddCustomer from './components/AddCustomer';
import CustomerDetails from './components/CustomerDetails';
import CustomersList from './components/CustomersList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className='container my-5'>
          <div className='row'>
            <div className='col'>
              <CustomersList />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <AddCustomer />
            </div>
            <div className='col-md-6'>
              <CustomerDetails />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
