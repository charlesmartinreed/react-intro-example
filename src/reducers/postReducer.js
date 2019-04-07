// evaluate any actions that are commited, fetching or creating posts
// each action has a 'type', which are basically just constants; fetch post, new post

import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
  // items represents posts that come in as a result of our request
  // item is the post that we'll add once we get back a response
  items: [],
  item: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    // return the current state, add the retrieved items
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };

    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };

    default:
      return state;
  }
};
