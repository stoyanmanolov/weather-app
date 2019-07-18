import React from 'react';
import './WeatherCard.css';
import WeatherInfo from './WeatherInfo';

class WeatherCard extends React.Component {
  render() {
    return(
      <div className="container">
        <WeatherInfo />
      </div>
    );
  }
}

export default WeatherCard;