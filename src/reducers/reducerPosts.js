import { UPDATE_POSTS } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS: {
      console.log(action.payload);
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
