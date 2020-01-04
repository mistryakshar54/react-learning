import intialState  from "../initialState";
const CoreReducer = ( stateSlice = intialState.core , action) => {
    switch (action.type) {
      case "SUCCESS_API": {
        let loadingApi = Object.assign({}, stateSlice);
        loadingApi.loadingState = false;
        loadingApi.apiStatus = 200;
        loadingApi.message = "";
        return { ...loadingApi };
      }
      case "ERROR_API": {
        let errorApi = Object.assign({}, stateSlice);
        errorApi.loadingState = false;
        errorApi.apiStatus = action.status;
        errorApi.message = action.message;
        return { ...errorApi };
      }
      case "LOADING_API": {
        let loadingApi = Object.assign({}, stateSlice);
        loadingApi.loadingState = true;
        loadingApi.apiStatus = 200;
        loadingApi.message = "";
        return { ...loadingApi };
      }
      default:
        return { ...stateSlice };
    }
}
export default CoreReducer;