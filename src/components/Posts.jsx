import React, { Component } from "react";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      // .then(data => console.log(data));
      .then(posts => {
        this.setState({ posts });
      });
  }

  render() {
    const postItems = this.state.posts.map(post => (
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

export default Posts;
