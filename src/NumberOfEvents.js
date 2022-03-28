import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
  }

  handleInputChange = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        numberOfEvents: "",
      });
    } else {
      this.setState({
        numberOfEvents: number,
      });
    }
  };
 

  render() {
    return (
      <div className="NumberOfEvents">
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