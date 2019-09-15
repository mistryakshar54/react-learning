const initialState = {
  posts: [],
  postsLoaded: false
};
const PostsReducer = (stateSlice = initialState, action) => {
  switch (action.type) {
    case "LOAD_POSTS": {
      if (action.posts) {
        return {
          ...stateSlice,
          posts: action.posts
        };
      }
      return {
        ...stateSlice
      };
    }
    case "API_SUCCESS": {
      return {
        ...stateSlice,
        postsLoaded: true
      };
    }
    case "API_ERROR": {
      return {
        ...stateSlice,
        postsLoaded: false
      };
    }
    default:
      return { ...stateSlice };
  }
};
export default PostsReducer;
