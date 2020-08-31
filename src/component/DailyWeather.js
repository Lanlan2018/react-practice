
import React from 'react';
import WeatherDisplay from './WeatherDisplay'

class DailyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDataArr: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://free-api.heweather.net/s6/weather?key=5985d625110348c3ac510770a2f400b5&location=' + this.props.match.params.city)
      .then(response => response.json()).then(item => {
        const weatherDataArr = item.HeWeather6[0].daily_forecast.filter(item => item.date === this.props.match.params.date)
          .map(item => {
            return {
              time: item.date,
              weatherCode: item.cond_code_d,
              highTemp: item.tmp_max,
              lowTemp: item.tmp_min,
              weatherText: item.cond_txt_d,
              sunrise: item.sr,
              sunside: item.ss,
              windDir: item.wind_dir,
              windSpeed: item.wind_sc,
              rainPercent: item.pop
            }
          });
        this.setState({
          weatherDataArr: weatherDataArr,
          isLoaded: false,
        })
      })
  }

  render() {
    const { weatherDataArr, isLoaded } = this.state;
    return (
      <div>
        <h4>  One Day Weather Forecast Of {this.props.match.params.city}  </h4>
        {isLoaded ? <h3> Loading </h3> : ''}

        {weatherDataArr.map((weatherObj) =>
          <div>
            <WeatherDisplay key={weatherObj.time} weather={weatherObj} />
            <div class="clearBoth">
              <h4>日出时间： {weatherObj.sunrise} 日落时间：{weatherObj.sunside} </h4>
              <h4>风向：  {weatherObj.windDir}   风力：{weatherObj.windSpeed} </h4>
              <h4>降水概率: {weatherObj.rainPercent}%</h4>
            </div>
          </div>)}

      </div>
    );
  }
}

export default DailyWeather;

