import React from "react";

const WeatherDetail = ({ weather, city }) => {
  const name = `${city.name}, ${city.country}`;
  const date = `${weather.dt.toLocaleDateString("default", {
    weekday: "short"
  })} ${weather.dt.getDate()} ${weather.dt.toLocaleString("default", {
    month: "long"
  })}`;
  const weatherStatus = weather.weather[0].main;
  const temperature = `${Math.trunc(weather.main.temp)}°`;

  return (
    <div className="weather-detail">
      <h2>{name}</h2>
      <h4>{date}</h4>
      <h4>{weatherStatus}</h4>
      <h3>{temperature}</h3>
    </div>
  );
};

export default WeatherDetail;
