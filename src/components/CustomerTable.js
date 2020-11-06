import React, { Component, Fragment } from 'react';

class CustomerTable extends Component {
  render() {
    return (
      <Fragment>
        <h3>Customers List</h3>
        <table className='table table-bordered table-sm table-hover'>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customers.map((c) => {
              return (
                <tr key={c.id} onMouseOver={() => this.props.onSelection(c)}>
                  <td>{c.id}</td>
                  <td>{c.firstName}</td>
                  <td>{c.lastName}</td>
                  <td>{c.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default CustomerTable;
