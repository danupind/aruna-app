import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class Fees extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="body-text">
          <br />
          <h3>Fees</h3>
          <br />
          <p>The fee for the entire course is Rs. 3,000.</p>
          <p>All the study material and a personal abacus tool is included in this package.</p>
          <br />
          <h3>Study materials</h3>
          <br />
          <p>At the beginning of every new level of the A.L.M.A course, students are provided a new set of workbooks and study materials specific to that level.</p>
          <br />
        </div>
      </div>
    );
  }
}

// TODO: things provided

export default Fees;
