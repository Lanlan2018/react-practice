import React from 'react';
import { 
 WiDaySunny,
WiCloudy,
WiCloudyGusts,
WiCloud,
WiDayRainMix,
WiRainMix,
WiRain,
WiSnowflakeCold,
WiFog,

} from "react-icons/wi";
import { IconContext } from "react-icons";

export default function WeatherDisplay(props) {
  let weatherIcon;
  switch (props.weather.weatherCode) {
    case 100:
      weatherIcon = <WiDaySunny />;
      break;
    case 101:
    case 102:
      weatherIcon = <WiCloudy />;
      break;
    case 103:
      weatherIcon = <WiCloudyGusts />;
      break;
    case 104:
      weatherIcon = <WiCloud />;
      break;
    case 305:
      weatherIcon = <WiDayRainMix />;
      break;
    case 306:
      weatherIcon = <WiRainMix />;
      break;
    case 307:
      weatherIcon = <WiRain />;
      break;
  }
  if (!weatherIcon) {
    switch ((props.weather.weatherCode / 100).toFixed(0)) {
      case "3":
        weatherIcon = <WiRain />;
        break;
      case "4":
        weatherIcon = <WiSnowflakeCold />;
        break;
      case "5":
        weatherIcon = <WiFog />;
        break;
      default:
        weatherIcon = <WiCloudy />;
        break;
    }
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
      <h3>{props.weather.weatherText}</h3>
      <div className="temp">
        <span className="high-temp">{props.weather.highTemp}℃</span>
        <span className="low-temp">{props.weather.lowTemp}℃</span>
      </div>
    </div>
  );
}