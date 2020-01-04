const intialState = {
  core: {
    loadingState: false,
    apiStatus: 200,
    message: "",
    errorModal: {
      open: false,
      message: ""
    },
    toggleAlert: false
  },
  news: {
    newslist : [],
    currentPageNo : 0,
  }
};

export default intialState;
