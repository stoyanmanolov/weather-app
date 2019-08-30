import React from "react";
import WeatherInfo from "./WeatherInfo";
import Cloudy from "../images/cloudy.jpg";
import Misty from "../images/misty.jpg";
import Rainy from "../images/rainy.jpg";
import Snowy from "../images/snowy.jpg";
import Sunny from "../images/sunny.jpg";

class WeatherCard extends React.Component {
  state = { weatherDay: null };

  getWeatherDay = weatherDay => {
    this.setState({ weatherDay });
  };

  changeImage = weatherDay => {
    // Based on information provided by the API.
    const id = weatherDay.weather[0].id;
    const firstDigit = id.toString()[0];
    const lastDigit = id.toString().slice(-1);

    switch (firstDigit) {
      case "2":
      case "3":
      case "5":
        return Rainy;
      case "6":
        return Snowy;
      case "7":
        return Misty;
      case "8":
        return lastDigit !== "0" ? Cloudy : Sunny;
      default:
        console.log("Error with changing image based on weather condition.");
    }
  };

  render() {
    return (
      <div className="weather-card">
        <WeatherInfo getWeatherDay={this.getWeatherDay} />
        {this.state.weatherDay ? (
          <React.Fragment>
            <img
              className="weather-image"
              src={this.changeImage(this.state.weatherDay)}
              alt="Weather"
            />
            {/* Hidden duplicate version shown only for larger screens */}
            <img
              className="cardside-image"
              src={this.changeImage(this.state.weatherDay)}
              alt="Weather"
            />
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default WeatherCard;
