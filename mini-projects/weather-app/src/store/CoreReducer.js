const initialState = {
  core: {
    isLoading: false,
    message: "",
  },
  cities: [
    {
      id: 5128638,
      name: "New York",
      state: "NY",
      country: "US",
      coord: {
        lon: -75.499901,
        lat: 43.000351,
      },
    },
    {
      id: 2643743,
      name: "London",
      state: "",
      country: "GB",
      coord: {
        lon: -0.12574,
        lat: 51.50853,
      },
    },
    {
      id: 4119617,
      name: "London",
      state: "AR",
      country: "US",
      coord: {
        lon: -93.25296,
        lat: 35.328972,
      },
    },
    {
      id: 4298960,
      name: "London",
      state: "KY",
      country: "US",
      coord: {
        lon: -84.08326,
        lat: 37.128979,
      },
    },
    {
      id: 4517009,
      name: "London",
      state: "OH",
      country: "US",
      coord: {
        lon: -83.44825,
        lat: 39.886452,
      },
    },
  ],
  filteredCities: [],
  selectedCity: {},
  weather: {},
};
const coreReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case "FILTER_LOCATION": {
            return { ...state , filteredCities : action.payload }
        }
        case "SELECT_LOCATION": {
            return { ...state , selectedCity : action.payload }
        }
        case "SET_LOADING": {
            const core = {
              isLoading: true,
              message: "",
            };
            return { ...state, core };
        }
        case "SET_LOADED": {
            const core = {
              isLoading: false,
              message: action.payload ? action.payload : "",
            };
            return { ...state, core };
        }
        case "SET_WEATHER": {
            return { ...state, weather: action.payload };
        }
        default: return state;
    }
}

export default coreReducer;
