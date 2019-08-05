import React from 'react';

const WeatherDetail = ({ weather , currentDayKey}) => {
  
  if (!weather) {
    return null
  }

  const city = `${weather.city.name}, ${weather.city.country}`;
  const date = `${weather.list[currentDayKey].dt.toLocaleDateString('default', { weekday: 'short' })} ${weather.list[currentDayKey].dt.getDate()} ${weather.list[currentDayKey].dt.toLocaleString('default', { month: 'long' })}`
  const temperature = `${weather.list[currentDayKey].main.temp.toPrecision(2)}°`;

  return (
    <div className="weather-detail">
      <h2>{city}</h2>
      <h4>{date}</h4>
      <h3>{temperature}</h3>
    </div>
  );
}

export default WeatherDetail;