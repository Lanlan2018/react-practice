import React from 'react';
import WeatherDisplay from './WeatherDisplay'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.weatherDataArr = [];
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "./data.json", true);
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4 && ajax.status === 200) {
        this.weatherDataArr = JSON.parse(ajax.responseText).weather;
        this.forceUpdate();
      }
    }
    ajax.send(null);
  }

  clickWeatherIcon(weatherItem) {
    console.log(weatherItem);
    this.props.history.push('/DailyWeather/'+weatherItem.time);
  }

  render() {
    return (
      <div>
        <h4>  One Week Weather Forecast  </h4>
        {this.weatherDataArr.map((weatherObj) => 
          <WeatherDisplay key={weatherObj.time} weather={weatherObj} handleClick={this.clickWeatherIcon.bind(this,weatherObj)} />
        )}
      </div>
    );
  }
}

export default Weather;

