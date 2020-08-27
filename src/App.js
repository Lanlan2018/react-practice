import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link, useRouteMatch, useParms
} from 'react-router-dom';
import { WiDayCloudyGusts, WiCloudy, WiCloudyGusts, WiHail, WiThunderstorm, WiFog, WiDayCloudy, WiDaySleetStorm } from "react-icons/wi";
import { IconContext } from "react-icons";


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/weather">Weather page</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Router path="/weather">
            <Weather />
          </Router>
          <Router path="/">
            <Home />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Test default Router - Home page Hellow World!!!</h1>
}

function Weather() {
  let weatherDataArr = [];
  let ajax = new XMLHttpRequest();
  ajax.open("GET", "./data.json", true);
  ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status == "200") {
      console.log('test ajax:', ajax.responseText);
      weatherDataArr = JSON.parse(ajax.responseText).weather;
    }
  }
  ajax.send(null);
  console.log('data json:');

  const weatherObj = { time: 'Mon', weatherIcon: 'wi-day-cloudy', highTemp: '35', lowTemp: '28' };
  return (<div>
    <h4>
      test Weather!!!
  </h4>
    {weatherDataArr.map((weatherObj) => <DaylyWeather weather={weatherObj} />)}
    {/* <DaylyWeather weather={weatherObj} /> */}
  </div>
  );
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

export default App;
