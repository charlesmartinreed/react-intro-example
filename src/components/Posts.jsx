import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux"; //connections components to redux store, provided by the Provider component
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    //place fetch post into a prop
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    // this is how we add our newly created post to the top of the posts in our DOM
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Recent Posts</h1>
        {postItems}
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
};

// this will create a this.state.props.items
const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

// map state to props here
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
