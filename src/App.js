import React, { Component } from "react";

import SeasonDisplay from "./SeasonDisplay";

export default class App extends Component {
  state = {
    lat: null,
    errorMeesage: "",
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMeesage: err.message })
    );
  }

  render() {
    if (this.state.errorMeesage && !this.state.lat) {
      return <div> Error: {this.state.errorMeesage}</div>;
    }

    if (!this.state.errorMeesage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <div>Loading!</div>;
  }
}
