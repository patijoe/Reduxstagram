export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

export function addComments(postId, author, comment) {
  return {
    type: 'ADD_COMMENTS',
    postId,
    author,
    comment
  };
}

export function removeComments(index) {
  return {
    type: 'REMOVE_COMMENTS',
    index
  };
}
