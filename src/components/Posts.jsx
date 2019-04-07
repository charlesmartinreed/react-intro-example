import React, { Component } from "react";
import { connect } from "react-redux"; //connections components to redux store, provided by the Provider component
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {
  componentWillMount() {
    //place fetch post into a prop
    this.props.fetchPosts();
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

// this will create a this.state.props.items
const mapStateToProps = state => ({
  posts: state.posts.items
});

// map state to props here
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
