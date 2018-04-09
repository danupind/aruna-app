import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class About extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="body-text">
          <br />
          <h3>A.L.M.A Institute</h3>
          <br />
          <p>A.L.M.A stands for <b>Abacus Learning and Mental Arithmetic</b>, which is a Chennai based Abacus institute in India.</p>
          <br />
          <p>The focus of this program is basic arithmetic principles which are:</p><p><b> Addition, Subtraction, Multiplication, Division </b></p>
          <p>Students are taught these principles starting with an abacus tool, and are gradually introduced to the application of these same concepts mentally.</p>
          <br />
          <p>All A.L.M.A teachers are well-trained and experienced teachers.</p>
          <br />
        </div>
      </div>
    );
  }
}


export default About;
