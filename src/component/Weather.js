import React from 'react';
import WeatherDisplay from './WeatherDisplay'
import CitySelector from "./CitySelector"

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      weatherDataArr: [],
      city: '上海'
    };
    this.cityChange = this.cityChange.bind(this);
  }

  componentDidMount() {
    this.fetchWeather(this.state.city);
  }

  fetchWeather(city) {
    this.setState({ isLoaded: true });
    fetch('https://free-api.heweather.net/s6/weather?key=5985d625110348c3ac510770a2f400b5&location=' + city)
      .then(response => response.json()).then(item => {
        const weatherDataArr = item.HeWeather6[0].daily_forecast.map(item => {
          return {
            time: item.date,
            weatherCode: item.cond_code_d,
            highTemp: item.tmp_max,
            lowTemp: item.tmp_min,
            weatherText: item.cond_txt_d
          }
        });
        this.setState({
          weatherDataArr: weatherDataArr,
          isLoaded: false,
          city
        })
      })
  }

  cityChange(city) {
    this.fetchWeather(city);
  }

  clickWeatherIcon(weatherItem) {
    this.props.history.push(`/DailyWeather/${this.state.city}/${weatherItem.time}`);
  }

  render() {
    const { weatherDataArr, isLoaded, city } = this.state;
    return (
      <div>
        <CitySelector onCityChange={this.cityChange} />
        <h2 className="page-title">Three Days Weather Forecast Of {city}</h2>
        {isLoaded ? <h3>Loading ... </h3> : ''}
        {weatherDataArr.map((weatherObj) =>
          <WeatherDisplay key={weatherObj.time} weather={weatherObj} handleClick={this.clickWeatherIcon.bind(this, weatherObj)} />
        )}
      </div>
    )
  }
}

export default Weather;

