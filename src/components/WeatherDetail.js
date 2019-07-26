import React from 'react';

const WeatherDetail = ({ weather , currentDayKey}) => {
  
  if (!weather) {
    return null
  }

  const city = `${weather.city.name}, ${weather.city.country}`;
  const date = `${weather.list[currentDayKey].dt.toLocaleDateString('default', { weekday: 'short' })} ${weather.list[0].dt.getDate()} ${weather.list[0].dt.toLocaleString('default', { month: 'long' })}`
  const temperature = `${weather.list[currentDayKey].main.temp.toPrecision(2)}°`;

  return (
    <div>
      <h1>{city}</h1>
      <h3>{date}</h3>
      <h2>{temperature}</h2>
      <img src={`http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`} alt="weatherIcon"></img>
    </div>
  );
}

WeatherDetail.defaultProps = {
  currentDayKey: 0
};

export default WeatherDetail;