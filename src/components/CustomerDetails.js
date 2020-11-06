import React, { Component, Fragment } from 'react';

class CustomerDetails extends Component {
  render() {
    return (
      <Fragment>
        <h3>Customer Details</h3>
        <hr />
        <p>ID: {this.props.customer ? this.props.customer.id : 'NA'}</p>
        <p>
          First Name:{' '}
          {this.props.customer ? this.props.customer.firstName : 'NA'}
        </p>
        <p>
          Last Name: {this.props.customer ? this.props.customer.lastName : 'NA'}
        </p>
        <p>Email: {this.props.customer ? this.props.customer.email : 'NA'}</p>
      </Fragment>
    );
  }
}

export default CustomerDetails;
