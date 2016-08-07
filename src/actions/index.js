// ACTION NAME DEFINITIONS

export const UPDATE_POSTS = 'UPDATE_POSTS';

// ACTION CREATOR DEFINITIONS

export function updatePosts(postsList) {
  console.log(postsList);
  return {
    type: UPDATE_POSTS,
    payload: postsList,
  };
}
