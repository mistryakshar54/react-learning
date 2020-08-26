const reducerAction = (type , payload = {}) => {
    return {
      type,
      payload
    };
}

export const setLoadingThunk = () => {
    return async (dispatch) => {
      dispatch(reducerAction("SET_LOADING"));
    }
}

export const setLoadedThunk = (message = "") => {
  return async (dispatch) => {
    dispatch(reducerAction("SET_LOADING", message));
  };
};

export const searchLocationThunk = (searchString) => {
   return async( dispatch ) => {
     //Set Loader
     dispatch(setLoadingThunk());
     dispatch(reducerAction("FILTER_LOCATION", searchString));
     dispatch(setLoadedThunk());
     //console.log(getState);
     //Search for the location from the available list
     //End Loader
     //return the list of available / searched locations
   }
}

export const loadWeatherInformationThunk = () => {
  return async (dispatch) => {
    //Make the API call
    //Load the data and set it into the state/
      //Process the weather information and save it into various part of the  state 
      // dispatch request to set the data
      // dispatch selected city ? Store it in the state?
      // dispatch stop loading
    // dispatch(reducerAction("SET_LOADING", ""));
  };
};
