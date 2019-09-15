import axios from "axios";

export const loadPosts = postsList => {
  return {
    type: "LOAD_POSTS",
    posts: postsList
  };
};

export const dispatchSuccessAPI = () => {
  return {
    type: "API_SUCCESS"
  };
};

export const dispatchErrorAPI = () => {
  return {
    type: "API_ERROR"
  };
};

export const fetchPostsThunk = () => {
  return async (dispatch, getState) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(resp => {
        let postsList = [];
        if (resp.data && resp.data.length > 0) {
          postsList = resp.data.splice(0, 15);
          dispatch(loadPosts(postsList));
          dispatch(dispatchSuccessAPI());
        } else {
          dispatch(dispatchErrorAPI());
        }
      })
      .catch(err => {
        dispatch(dispatchErrorAPI());
      });
  };
};
