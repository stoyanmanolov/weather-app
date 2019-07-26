import React from 'react';
import WeatherInfo from './WeatherInfo';

class WeatherCard extends React.Component {
  render() {
    return(
      <div className="card-container">
        <WeatherInfo />
      </div>
    );
  }
}

export default WeatherCard;