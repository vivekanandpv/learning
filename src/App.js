import React, { Component, Fragment } from 'react';
import AddCustomer from './components/AddCustomer';
import CustomerDetails from './components/CustomerDetails';
import CustomersList from './components/CustomersList';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CustomersList />
      </Fragment>
    );
  }
}

export default App;
