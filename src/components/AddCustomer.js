import React, { Component, Fragment } from 'react';

class AddCustomer extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
  };

  handleInput = (e) => {
    e.persist();
    this.setState((state, props) => {
      switch (e.target.name) {
        case 'firstName':
          return { firstName: e.target.value };
        case 'lastName':
          return { lastName: e.target.value };
        case 'email':
          return { email: e.target.value };
        default:
          break;
      }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Event', e);
    // console.log('Form Data', this.state);

    this.props.onAdd(this.state);
  };

  render() {
    return (
      <Fragment>
        <h3>Add Customer</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              className='form-control'
              id='firstName'
              name='firstName'
              onInput={this.handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              className='form-control'
              id='lastName'
              name='lastName'
              onInput={this.handleInput}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              className='form-control'
              id='email'
              name='email'
              onInput={this.handleInput}
            />
          </div>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </Fragment>
    );
  }
}

export default AddCustomer;
