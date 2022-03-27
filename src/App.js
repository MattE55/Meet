import React, { Component } from 'react';
import './App.css';
import './nprogress.css'
import EventList from './EventList';
import CitySearch from './CitySearch';
import Event from './Event';
import NumberOfEvents from './NumberOfEvents'
import { getEvents, extractLocations } from './api';


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  }

  /*updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }*/

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
        events, 
        locations: extractLocations(events) 
        
        });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(0, this.state.numberOfEvents),
          currentLocation: location,
          numberOfEvents: eventCount
        });
      }
    });
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      { 
        numberOfEvents, 
      },
      this.updateEvents(this.state.locations, numberOfEvents)
    );
  };

  render() {
    return (
      <div className="App">
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} />
        <NumberOfEvents />
        <EventList 
          events={this.state.events} 
          numberOfEvents={this.state.numberOfEvents} />

      </div>
    );
  }
}

export default App;
