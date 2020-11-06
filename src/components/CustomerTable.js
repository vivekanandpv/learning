import React, { Component } from 'react';

class CustomerTable extends Component {
  render() {
    return (
      <table className='table table-bordered table-sm'>
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
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default CustomerTable;
