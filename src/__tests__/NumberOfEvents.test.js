import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.inputNumber').prop('value')).toBe(32);
  });

  test('change number of events when input changes', () => {
    NumberOfEventsWrapper.setState({ numberOfEvents: 32 });
    expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(32);
  });

});


