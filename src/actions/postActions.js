// import types
import { FETCH_POSTS, NEW_POST } from "./types";

// each action creator is a function that we need to export
export const fetchPosts = () => dispatch => {
  // thunk allows access to Dispatch func directly, for making async request
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
