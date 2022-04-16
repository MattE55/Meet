import React, { Component } from 'react';
import './App.css';
import './nprogress.css'
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents'
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import { OfflineAlert } from './Alert';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import EventGenre from './EventGenre';


class App extends Component {

  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    location: 'all',
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
          }
        });
      }
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

  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    })
    return data;
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
           <h4>Events in each city</h4>
        
        <div className='data-vis-wrapper'>
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
          </ResponsiveContainer>
        </div>
        
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
