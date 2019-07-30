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
      <h1>{city}</h1>
      <h3>{date}</h3>
      <h2>{temperature}</h2>
    </div>
  );
}

export default WeatherDetail;