import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
        <div className="btn-group">
          <Link className="btn btn-primary btn-lg" to="/">
            Home
          </Link>
          <Link className="btn btn-primary btn-lg" to="/about">
            About ALMA
          </Link>
          <Link className="btn btn-primary btn-lg" to="/abacus">
            What is Abacus
          </Link>
          <Link className="btn btn-primary btn-lg" to="/levels">
            Course Levels
          </Link>
          <Link className="btn btn-primary btn-lg" to="/fees">
            Fees & Materials
          </Link>
          <Link className="btn btn-primary btn-lg" to="/contact">
            Contact
          </Link>
        </div>
    );
  }
}


export default Navbar;