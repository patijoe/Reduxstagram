import * as types from './types';

export function increment(index) {
  return {
    type: types.INCREMENT_LIKES,
    index
  };
}

export function addComments(postId, author, comment) {
  return {
    type: types.ADD_COMMENTS,
    postId,
    author,
    comment
  };
}

export function removeComments(index) {
  return {
    type: types.REMOVE_COMMENTS,
    index
  };
}
