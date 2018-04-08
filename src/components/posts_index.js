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
          <h3>Welcome To Aruna's Abacus classes</h3>
          <p></p>
        </div>
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
