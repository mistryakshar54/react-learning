import axios from 'axios';
import {API_KEY} from './keys';
const dispatchGet = async (url) => {
  const resp = await axios.get( url );
  return{
    data : resp.data,
    status : resp.status
  }
}

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
     dispatch(setLoadingThunk());
     let cities = [];
     if(searchString.length > 3){
     const responseData = await dispatchGet(
       `https://openweathermap.org/data/2.5/find?q=${searchString}&appid=439d4b804bc8187953eb36d2a8c26a02&units=metric`
     );
      cities = [...responseData.data.list];
     }
     dispatch(reducerAction("FILTER_LOCATION", cities));
     dispatch(setLoadedThunk());
   }
}

export const loadWeatherInformationThunk = (city) => {
  return async (dispatch) => {
    dispatch(setLoadingThunk());
    const { lat,lon } = city.coord;
    const responseData = await dispatchGet(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&%20exclude=minutely,daily&appid=${API_KEY}`
    );
    if(responseData.status === 200){
      const { data } = responseData;
      const weatherData = {
        city,
        timeZoneOffset : data.timezone_offset,
        date: getDate(data.current.dt, data.timezone_offset),
        sunrise: getTime(data.current.sunrise, data.timezone_offset),
        sunset: getTime(data.current.sunset, data.timezone_offset),
        currentTemp: getDegreeCelcius(data.current.temp),
        feelsLike: getDegreeCelcius(data.current.feels_like),
        weather: data.current.weather,
        hourly: data.hourly
          .filter(
            (hourData) =>
              getDate(hourData.dt, data.timezone_offset) ===
              getDate(data.current.dt, data.timezone_offset)
          )
          .map((hourData) => {
            return {
              date: getTime(hourData.dt, data.timezone_offset),
              temp: getDegreeCelcius(hourData.temp),
              feelsLike: getDegreeCelcius(hourData.feels_like),
            };
          }),
      };
      dispatch(reducerAction("SELECT_LOCATION", {...city , timeZoneOffset : data.timezone_offset}));
      dispatch(reducerAction("SET_WEATHER" , weatherData));
    }
    dispatch(setLoadedThunk());
  };
};

const getDate = ( timeStamp , offset ) => {
  let d = new Date((timeStamp + offset) * 1000);
  return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
}

const getTime = (timeStamp, offset) => {
  let d = new Date((timeStamp + offset) * 1000);
  let hrs = d.getUTCHours();
  let type = hrs > 12 ? "PM" : "AM";
  if( hrs > 12 ){
    hrs -= 12;
  }
   return `${hrs} ${type}`;
};

const getDegreeCelcius = (temp) => parseInt(temp - 273.15);