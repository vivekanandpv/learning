import React, { Component, Fragment } from 'react';

class CustomerDetails extends Component {
  render() {
    return (
      <Fragment>
        <h3>Customer Details</h3>
        <hr />
        <p>ID: {this.props.id}</p>
        <p>First Name: {this.props.firstName}</p>
        <p>Last Name: {this.props.lastName}</p>
        <p>Email: {this.props.email}</p>
      </Fragment>
    );
  }
}

export default CustomerDetails;
