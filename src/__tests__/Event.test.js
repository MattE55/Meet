import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
  let EventWrapper

  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });

  test('render the event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render the summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render the location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('Show details button is rendered', () => {
    expect(EventWrapper.find('.show-details')).toHaveLength(1);
  });

  test('event element is collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('clicking on show details button shows extra details', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.show-details').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });
});