import React, { useState } from 'react';

const WeatherList = ({ weather , onClick }) => {

  const [ stateKey, setStateKey ] = useState();

  const listItems = (list) => {
    return Object.keys(list).map((key) =>
<<<<<<< HEAD
    <li style={ stateKey === key ? { backgroundColor: 'lightgrey' } : null } onClick={() => {
=======
    <li style={ stateKey == key ? { backgroundColor: 'lightgrey' } : null } onClick={() => {
>>>>>>> Adding hooks for styling weather items onClick
      setStateKey(key);
      onClick(key);
    }} key={key}>
      <p>{list[key].dt.toLocaleDateString('default', { weekday: 'long' })}</p>
      <img src={`http://openweathermap.org/img/w/${list[key].weather[0].icon}.png`} alt="weatherIcon"></img>
      <p>{`${list[key].main.temp.toPrecision(2)}°`}</p>
    </li>
    );
  } 
  if (!weather) {
    return null;
  }
  return (
    <div>
      <ul>
        {listItems(weather.list)}
      </ul>
    </div>
  );
}

export default WeatherList;