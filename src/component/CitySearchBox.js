import React from 'react';

export default class CitySearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
      resultArr: []
    }
    this.keyWordChange = this.keyWordChange.bind(this);
  }

  searchCity(keyWord) {
    fetch('https://geoapi.heweather.net/v2/city/lookup?key=5985d625110348c3ac510770a2f400b5&location=' + keyWord)
      .then(response => response.json()).then(res => {
        if (res.code === '404') {
          this.setState({
            resultArr: []
          })
        } else {
          const cityList = res.location.map(cityData => ({ name: cityData.name }));
          this.setState({
            resultArr: cityList
          })

        }
      })
  }

  keyWordChange(event) {
    if (event.target.value.length >= 2) {
      this.setState({
        keyWord: event.target.value
      })
      this.searchCity(event.target.value);
    } else {
      this.setState({
        resultArr: [],
        keyWord: event.target.value
      })
    }
  }

  cityChange(event) {
    this.props.onCityChange(event);
  }

  optionClick(name) {
    this.setState({
      keyWord: name,
      resultArr: []
    })
    this.cityChange(name)
  }

  inputOnBlur = () => {
    this.setState({
      isShowCheckBox: false
    })
  }

  inputOnFocus = () => {
    this.setState({
      isShowCheckBox: true
    })
    if (this.state.keyWord.length >= 2) {
      this.searchCity(this.state.keyWord);
    }
  }

  render() {
    const { keyWord, resultArr, isShowCheckBox } = this.state;
    return (
      <div className="city-search">
        <input type="text" placeholder="Please input more than 2 characters" value={keyWord} onChange={this.keyWordChange} onBlur={this.inputOnBlur}
          onFocus={this.inputOnFocus} />
        {
          resultArr.length ?
          <div className="keyWord-list">
            {resultArr.map(item => <div className="list-item" key={item.name} onClick={this.optionClick.bind(this, item.name)}>{item.name}</div>)}
          </div>
          : keyWord.length >= 2 && isShowCheckBox ? <div className="keyWord-list">No results</div> : ''
        }
      </div>

    )
  }
}


