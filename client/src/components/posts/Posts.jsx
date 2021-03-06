import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPosts } from "../../actions/postActions";

import PostFeed from "./PostFeed";
import PostForm from "./PostForm";
import Spinner from "../common/Spinner";

class Posts extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    getPosts: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;

    let postContent;
    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <PostForm />
          {postContent}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
