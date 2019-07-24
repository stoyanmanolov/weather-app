import React from 'react';

const WeatherDetail = ({ weather }) => {
  
  if (!weather) {
    return null
  }

  const city = `${weather.city.name}, ${weather.city.country}`;
  const date = `${weather.list[0].dt.toLocaleDateString('default', { weekday: 'short' })} ${weather.list[0].dt.getDate()} ${weather.list[0].dt.toLocaleString('default', { month: 'long' })}`
  const temperature = weather.list[0].main.temp;

  return (
    <div>
      <h1>{city}</h1>
      <h3>{date}</h3>
      <h3>{temperature}</h3>
      <img src={`http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`} alt="weatherIcon"></img>
    </div>
  );
}

export default WeatherDetail;