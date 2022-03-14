import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents numberOfEvents={32} />);
  });

  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(32);
  });

});


