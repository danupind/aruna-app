import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="body-text">
          <br />
          <h1>Welcome To Aruna's abacus classes</h1>
          <br />
          <h3>About Aruna</h3>
          <p>Aruna is a trained, experienced and dedicated teacher for 25+ years in various roles over the years, most recently teaching Abacus math to middle-school students.</p>
          <p>In her past experiences, she has been a primary school teacher, a pre-college lecturer and a tuition teacher to all levels of school students before venturing out to open her own A.L.M.A franchise 15 years ago.</p>
          <p>What makes her effective is her personable style of mentoring kids and undivided attention she gives to each and every student in her class. Class size per course level is generally kept small ranging from 3-6 students to achieve best results.</p>
          <br />
        </div>
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
