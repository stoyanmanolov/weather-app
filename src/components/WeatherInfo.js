import React from 'react';
import axios from 'axios';

class WeatherInfo extends React.Component {
  state = { cityName: '', weatherInformation: null };

  getCity = (city) => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=818b740e822277fb1688acee53285bde`)
    .then((response) => this.setState({ weatherInformation: response }))
    .catch((error) => window.alert(error.response.statusText));
  }

  componentDidUpdate() {
    console.log(this.state.weatherInformation);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.getCity(this.state.cityName);
  }

  renderInput = () => {
    return (
    <form onSubmit={this.handleSubmit}>
      <input type="text" value={this.state.cityName} onChange={(e) => this.setState({ cityName: e.target.value })}></input>
      <input type="submit" style={{ display: 'none' }}></input>
    </form>
    );
  }
  
  render() {
    return(
      <div>
        {this.renderInput()}
      </div>
    );
  }
}

export default WeatherInfo;