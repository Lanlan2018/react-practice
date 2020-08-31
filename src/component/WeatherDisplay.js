import React from 'react';
import { WiCloudy, WiCloudyGusts, WiHail, WiThunderstorm, WiFog, WiDayCloudy, WiDaySleetStorm } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function WeatherDisplay(props) {
    let weatherIcon;
    switch (props.weather.weatherIcon) {
      case 'wi-cloudy':
        weatherIcon = <WiCloudy />;
        break;
      case 'wi-cloudy-gusts':
        weatherIcon = <WiCloudyGusts />;
        break;
      case 'wi-hail':
        weatherIcon = <WiHail />;
        break;
      case 'wi-thunderstorm':
        weatherIcon = <WiThunderstorm />;
        break;
      case 'wi-fog':
        weatherIcon = <WiFog />;
        break;
      case 'wi-day-cloudy':
        weatherIcon = <WiDayCloudy />;
        break;
      case 'wi-day-sleet-storm':
        weatherIcon = <WiDaySleetStorm />;
        break;
    }
    return (
      <div className="dayly-weather-container" onClick={props.handleClick}>
        <div className="time">
          {props.weather.time}
        </div>
        <IconContext.Provider value={{ color: "blue", size: "4em", className: "global-weather-icon" }}>
          <div>
            {weatherIcon}
          </div>
        </IconContext.Provider>
        <div className="temp">
          <span className="high-temp">{props.weather.highTemp}℃</span>
          <span className="low-temp">{props.weather.lowTemp}℃</span>
        </div>
      </div>
    );
  }