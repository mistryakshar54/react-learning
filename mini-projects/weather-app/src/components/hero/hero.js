import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import './hero.css'
import {connect} from 'react-redux';
const HeroComponent = ( ) => {
    const getHeroData = () => {
       const city = {
              id: 1253573,
              name: "Vadodara",
              coord: {
                lat: 22.3,
                lon: 73.2,
              },
              main: {
                temp: 301.15,
                feels_like: 305.97,
                temp_min: 301.15,
                temp_max: 301.15,
                pressure: 1001,
                humidity: 94,
              },
              dt: 1598710172,
              wind: {
                speed: 4.1,
                deg: 180,
              },
              sys: {
                country: "IN",
              },
              rain: null,
              snow: null,
              clouds: {
                all: 75,
              },
              weather: [
                {
                  id: 721,
                  main: "Haze",
                  description: "haze",
                  icon: "50n",
                },
              ],
        };
        console.log("city", city);
      if (!city.name) {
        return (
          <>
            <h1>Welcome to the weather app</h1>
            <p>
              Start searching for a city to show the current weather information
            </p>
          </>
        );
      }
      else{
          const {  name, dt, timeZoneOffset, main, weather } = city;
          return (
            <>
              <h1>
                {name} | {parseInt(main.temp - 273.15)}°C
              </h1>
              <h3>{new Date((dt - timeZoneOffset) * 1000).toUTCString()}</h3>
              <h4>
                Feels Like: {parseInt(main.feels_like - 273.15)}°C | Humidity :{" "}
                {main.humidity} %
              </h4>
              <h4 style={{textTransform: 'capitalize'}}>{weather.map((item) => item.description)}</h4>
            </>
          );
      }
    };
    return (
      <Jumbotron fluid>
        <div className="container">{getHeroData()}</div>
      </Jumbotron>
    );
}

const mapStateToProps = ( state ) => {
  return {
    city: state.selectedCity,
  };
}
export default connect(mapStateToProps)(HeroComponent);
