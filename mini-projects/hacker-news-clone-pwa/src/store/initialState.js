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
  auth: {
    authToken: null,
    isAuthenticated: false,
    authUser: {},
    expiresAt: 0
  }
};

export default intialState;
