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

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="body-text">
          <h3>Home</h3>
        </div>
      </div>
    );
  }
}

function  mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
