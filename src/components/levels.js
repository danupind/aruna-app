import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class Levels extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="body-text">
          <br />
          <h3>Course Levels</h3>
          <br />
          <p>The A.L.M.A program has 6 levels in total.</p>
          <p>Typically each level takes about 4 months to complete.</p>
          <br />
        </div>
      </div>
    );
  }
}

// TODO: fill in details of each level:

export default Levels;
