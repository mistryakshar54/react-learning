const initialState = {
    app : {
        isLoading : false,
        message : ""
    },
    cities : [],
    selectedCity : {},
    weather : {}
}
const coreReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case "SELECT_LOCATION": {
            return { ...state , selectedCity : action.payload }
        }
        case "SET_LOADING": {
            return { ...state , app : { ...app , isLoading : true , message : "" } }
        }
        case "SET_LOADED": {
            const app = {
                isLoading : false,
                message :  (action.payload) ? action.payload :  ""
            }
            return { ...state , app  }
        }
        case "SET_WEATHER": {
            return { ...state, weather: action.payload };
        }
        default: return state;
    }
}

export default coreReducer;
