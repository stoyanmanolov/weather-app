import React from 'react';
import axios from 'axios';

class WeatherInfo extends React.Component {
  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=818b740e822277fb1688acee53285bde')
    .then((response) => console.log(response))
    .catch((error) => window.alert(error.message));
  }
  render() {
    return(
      <div>
        WeatherInfo
      </div>
    );
  }
}

export default WeatherInfo;