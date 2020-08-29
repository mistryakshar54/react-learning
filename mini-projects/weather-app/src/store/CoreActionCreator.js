import {rawData} from './rawdata';
import axios from 'axios';

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
    console.log("Fetch details for ", city);
    const weatherData = {
      city,
      timeZoneOffset : rawData.timezone_offset,
      date: getDate(rawData.current.dt, rawData.timezone_offset),
      sunrise: getTime(rawData.current.sunrise, rawData.timezone_offset),
      sunset: getTime(rawData.current.sunset, rawData.timezone_offset),
      currentTemp: getDegreeCelcius(rawData.current.temp),
      feelsLike: getDegreeCelcius(rawData.current.feels_like),
      weather: rawData.current.weather,
      hourly: rawData.hourly
        .filter(
          (hourData) =>
            getDate(hourData.dt, rawData.timezone_offset) ===
            getDate(rawData.current.dt, rawData.timezone_offset)
        )
        .map((hourData) => {
          return {
            date: getTime(hourData.dt, rawData.timezone_offset),
            temp: getDegreeCelcius(hourData.temp),
            feelsLike: getDegreeCelcius(hourData.feels_like),
          };
        }),
    };
    dispatch(reducerAction("SELECT_LOCATION", {...city , timeZoneOffset : rawData.timezone_offset}));
    dispatch(reducerAction("SET_WEATHER" , weatherData));
    console.log(weatherData);
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