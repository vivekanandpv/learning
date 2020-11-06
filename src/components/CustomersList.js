import React, { Component, Fragment } from 'react';
import customers from '../data/data.json';

class CustomersList extends Component {
  render() {
    return (
      <Fragment>
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
            {customers.map((c) => {
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
      </Fragment>
    );
  }
}

export default CustomersList;
