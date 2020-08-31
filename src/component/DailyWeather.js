
import React from 'react';
import WeatherDisplay from './WeatherDisplay'

class DailyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.weatherDataArr = [];
    let ajax = new XMLHttpRequest();
    ajax.open("GET", "../data.json", true);
    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4 && ajax.status === 200) {
        this.weatherDataArr = JSON.parse(ajax.responseText).weather;
        this.weatherDataArr = this.weatherDataArr.filter(item=>{
          return item.time === props.match.params.date;
        })
        this.forceUpdate();
      }
    }
    ajax.send(null);
  }

  render() {
    return (
      <div>
        <h4>  One Day Weather Forecast  </h4>
        {this.weatherDataArr.map((weatherObj) => <WeatherDisplay key={weatherObj.time} weather={weatherObj} />)}
      </div>
    );
  }
}

export default DailyWeather;

