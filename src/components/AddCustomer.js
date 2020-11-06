import React, { Component, Fragment } from 'react';

class AddCustomer extends Component {
  state = {};
  render() {
    return (
      <Fragment>
        <h3>Add Customer</h3>
        <hr />
        <form>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' className='form-control' id='firstName' />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' className='form-control' id='lastName' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='text' className='form-control' id='email' />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default AddCustomer;
