import React from 'react';
import { WiCloudy, WiCloudyGusts, WiHail, WiThunderstorm, WiFog, WiDayCloudy, WiDaySleetStorm } from "react-icons/wi";
import { IconContext } from "react-icons";

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.weatherDataArr = [];
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "./data.json", true);
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4 && ajax.status == "200") {
        console.log('test ajax:', ajax.responseText);
        this.weatherDataArr = JSON.parse(ajax.responseText).weather;
        this.forceUpdate();
      }
    }
    ajax.send(null);
    console.log('data json:');
  }

  render() {
    return (
      <div>
        <h4>  test Weather!!!  </h4>
        {weatherDataArr.map((weatherObj) => <DaylyWeather weather={weatherObj} />)}
      </div>
    );
  }
}


function DaylyWeather(props) {
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
    <div className="dayly-weather-container">
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