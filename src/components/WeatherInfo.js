import React from "react";
import axios from "axios";
import WeatherDetail from "./WeatherDetail";
import WeatherList from "./WeatherList";

class WeatherInfo extends React.Component {
  state = { cityName: "", weatherInformation: null, weatherDayKey: "0" };

  getCity = city => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=818b740e822277fb1688acee53285bde`
      )
      .then(response => {
        const filteredData = this.filterData(response.data);
        this.setState({ weatherInformation: filteredData });
        // Send data to parent
        this.props.getWeatherDay(
          this.state.weatherInformation.list[this.state.weatherDayKey]
        );
      })
      .catch(error => window.alert(error.response.statusText));
  };

  // Filtering the data for useful information.
  filterData = data => {
    // Reducing the 40 3-hour interval weather information to 6 days.
    data.list = Object.keys(data.list)
      .filter(key => key === "0" || key % 8 === 0 || key === "39")
      .reduce(
        (object, currentKey, index) => ({
          ...object,
          [index]: data.list[currentKey]
        }),
        {}
      );
    // Changing the date format
    for (let key in data.list) {
      if (data.list.hasOwnProperty(key)) {
        data.list[key].dt = new Date(data.list[key].dt * 1000);
      }
    }
    return data;
  };

  handleSubmit = event => {
    event.preventDefault();
    this.getCity(this.state.cityName);
  };

  renderInput = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.cityName}
          onChange={e => this.setState({ cityName: e.target.value })}
        ></input>
        <input type="submit" style={{ display: "none" }}></input>
      </form>
    );
  };

  renderIntroduction = () => {
    return (
      <div className="intro">
        <h1>Weather App</h1>
        <h3>Please enter a city</h3>
        <h5>
          For precise search separate the city and country code with a comma.
          (London, UK)
        </h5>
      </div>
    );
  };

  handleClick = key => {
    this.setState({ weatherDayKey: key });
    // Send data to parent
    this.props.getWeatherDay(this.state.weatherInformation.list[key]);
  };

  render() {
    return (
      <div className="weather-info">
        {!this.state.weatherInformation ? (
          <React.Fragment>
            {this.renderIntroduction()}
            {this.renderInput()}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {this.renderInput()}
            <WeatherDetail
              weather={
                this.state.weatherInformation.list[this.state.weatherDayKey]
              }
              city={this.state.weatherInformation.city}
            />
            <WeatherList
              weather={this.state.weatherInformation}
              onClick={this.handleClick}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default WeatherInfo;
