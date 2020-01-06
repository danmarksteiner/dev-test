import React, { Component } from 'react';

import { fetchItineraries, fetchLegs } from '../../api/Flights';
import FlightCard from '../FlightCard';

class Flights extends Component {
  constructor() {
    super();
    this.state = {
      itineraries: null,
      legs: null,
    };
  }

  componentDidMount() {
    fetchItineraries().then(itineraries => this.setState({ itineraries }));
    fetchLegs().then(legs => this.setState({ legs }));
  }

  renderContent() {
    if (this.state.itineraries && this.state.legs) {
      return (
        <FlightCard
          itineraries={this.state.itineraries}
          legs={this.state.legs}
        />
      );
    }

    return <div>Loading</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Flights;
