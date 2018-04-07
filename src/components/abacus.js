import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class Abacus extends Component {

  onSubmit(values) {
    console.log(values);
  }

  render() {

    return (
      <div>
        <Navbar />
        <div className="body-text">
          <h3>What is Abacus</h3>
        </div>
      </div>
    );
  }
}


export default Abacus;
