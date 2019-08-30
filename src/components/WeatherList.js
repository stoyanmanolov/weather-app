import React, { useState } from "react";

const WeatherList = ({ weather, onClick }) => {
  const [stateKey, setStateKey] = useState();

  const listItems = list => {
    return Object.keys(list).map(key => (
      <li
        className={stateKey === key ? "clickStyle" : null}
        onClick={() => {
          setStateKey(key);
          onClick(key);
        }}
        key={key}
      >
        {key === "0" ? (
          <p>Today</p>
        ) : (
          <p>
            {list[key].dt.toLocaleDateString("default", { weekday: "long" })}
          </p>
        )}
        <img
          src={`http://openweathermap.org/img/w/${list[key].weather[0].icon}.png`}
          alt="weatherIcon"
        ></img>
        <p>{`${Math.trunc(list[key].main.temp)}°`}</p>
      </li>
    ));
  };
  return (
    <div className="weather-list">
      <ul>{listItems(weather.list)}</ul>
    </div>
  );
};

export default WeatherList;
