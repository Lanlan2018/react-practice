import React from 'react';

export default class CitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.cityList = [
        {name:'上海'},
        {name:'北京'},
        {name:'广州'},
        {name:'深圳'},
        {name:'拉萨'},
        {name:'三亚'},
    ]
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
      this.props.onCityChange(event.target.value);
  }

  render() {
    return (
        <select onChange={this.handleChange}>
            {this.cityList.map(item=>
                <option key={item.name} value={item.name}>{item.name}</option>
            )}
        </select>
    )
  }
}


