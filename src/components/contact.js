import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class Contact extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="body-text">
          <h3>Location and Contact information</h3>
        </div>
      </div>
    );
  }
}


export default Contact;
