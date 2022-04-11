import React, { Component } from 'react';
import './App.css';
import './nprogress.css'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents'
import WelcomeScreen from '.WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
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

  updateEvents = (location = null, eventCount = null) => {
    this.mounted = true;
    getEvents().then((events) => {
      const locationEvents =
        location === "all" || !location
          ? events
          : events.filter((event) => event.location === location);
  
      if (this.mounted) {
        this.setState({
          events: locationEvents.slice(
            0,
            eventCount || this.state.numberOfEvents
          ),
        });
      }
    });
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState(
      { 
        numberOfEvents, 
      },
      this.updateEvents(null, numberOfEvents)
    );
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="app" />
    return (
      <div className="App">
        <div className="Appheader">
          <h1>Search for Events!</h1>
          <p>I am a student at CareerFoundry and this app uses the google calendar API to search for events. You can search a city and filter the amount of events you want to see below.</p>
          {!navigator.onLine && <OfflineAlert text={"Offline, New events cannot be loaded until you have an internet connetion."} /> }
        </div>
        <CitySearch 
          locations={this.state.locations} 
          updateEvents={this.updateEvents} />
        <NumberOfEvents 
          updateNumberOfEvents = {(number) => {
            this.updateNumberOfEvents(number);
          }} />
        <EventList 
          events={this.state.events}
        />
        <WelcomeScreen 
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {getAccessToken() }}
        />
      </div>
    );
  }
}

export default App;
