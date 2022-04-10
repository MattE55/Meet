import React, { Component } from 'react';
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    errorText:''
  }

  handleInputChange = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        numberOfEvents: "",
        errorText: 'Please enter a number between 1 and 32',
      });
    } else {
      this.setState({
        numberOfEvents: number,
        errorText: '',
      });
    }
    this.props.updateNumberOfEvents(number);
  };
 

  render() {
    return (
      <div className="NumberOfEvents">
        <div className="numberOfEventsAlert">
          <ErrorAlert text={this.state.errorText}/>
        </div>
        <input
          type="number"
          className="inputNumber"
          onChange={this.handleInputChange}
          value={this.state.numberOfEvents}
        />
      </div>
    )
  };
}

export default NumberOfEvents;