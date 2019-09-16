import React from "react";
import { connect } from "react-redux";
import { fetchWeather, setDay } from "../actions";
import WeatherDetail from "./WeatherDetail";
import WeatherList from "./WeatherList";

class WeatherInfo extends React.Component {
  state = { cityName: "" };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchWeather(this.state.cityName);
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
    this.props.setDay(key);
  };

  render() {
    return (
      <div className="weather-info">
        {!this.props.weather ? (
          <React.Fragment>
            {this.renderIntroduction()}
            {this.renderInput()}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {this.renderInput()}
            <WeatherDetail
              weather={this.props.weather.list[this.props.day]}
              city={this.props.weather.city}
            />
            <WeatherList
              weather={this.props.weather}
              onClick={this.handleClick}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { weather: state.weather, day: state.day };
};

export default connect(
  mapStateToProps,
  { fetchWeather, setDay }
)(WeatherInfo);
