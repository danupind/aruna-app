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
          <br />
          <h3>History of the Abacus instrument</h3>
          <p>Abacus is known to have been invented by the Chinese as early as in the 2nd century BC. But other civilizations around the world have been using it to perform calculations for many centuries as well.</p>
          <p>A typical Abacus is a rectangular device with upto 10 vertical strings/rods and 1 horizontal dividing beam to separate into 2 decks. The top deck has 2 round beads on each string, whereas the bottom has 5 round beads on each string.</p>
          <p>These beads, strings can be combinatioed to represent decimals places and integers. And they can be moved to different positions to perform 4 basic arithmetic actions: addition, subtraction, multiplication and division.</p>
          <h3>Benefits of Mental Abacus</h3>
          <p>Abacus has been used in schools to help in teaching the numeral system and arithmetic to kids all around the World. As an early step is it taught with an instrument, and after students gain enough confidence it is then taught mentally. Here students perform rapid calculations using their mind as an imaginary Abacus.</p>
          <p>
            <ul>
              <li>Learning such a skill at an young age expands the kid's mind vastly to new ideas and out-of-the-box thinking.</li>
              <li>It's a great way to help kids develop focus at this day and age of smart-phones, giant screens and video games.</li>
              <li>It strengthens the kid's mind in terms of quick-thinking and improved reaction time after each level.</li>
              <li>Helps improve their performance in School tasks and exams, especially in Mathematics, because the basics are strong.</li>
            </ul>
          </p>
          <br />
        </div>
      </div>
    );
  }
}


export default Abacus;
