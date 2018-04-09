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
          <br />
          <h3>Location</h3>
          <p>Aruna's A.L.M.A franchise is based at her residence in 2nd block, Vidyaranyapura, Bangalore.</p>
          <p>Address:</p>
          <br />
          <h3>Phone & Email</h3>
          <p>For inquiries about classes please call/sms/whatssap at <b>+91 9844266710</b></p>
          <p>You can also email her at <b>aruna.anupindi@gmail.com</b></p>
          <br />
        </div>
      </div>
    );
  }
}
 // TODO: google map integration

export default Contact;
