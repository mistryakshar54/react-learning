import intialState  from "../initialState";
const CoreReducer = ( stateSlice = intialState.core , action) => {
    switch (action.type) {
      default:
        return { ...stateSlice };
    }
}
export default CoreReducer;