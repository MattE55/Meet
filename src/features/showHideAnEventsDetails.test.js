import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  let AppWrapper;
  test('An event element is collapsed by default.', ({ given, when, then }) => {
    given('user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('nothing is clicked on an event', () => {
      expect(AppWrapper.find('.details-view')).toHaveLength(0);
    });

    then('the event details will be collapsed', () => {
      expect(AppWrapper.find('.details-view')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, when, then }) => {
    given('user would like to see details on the event', () => {
      AppWrapper = mount(<App />);
    });

    when('user clicks that event', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.details-view')).toHaveLength(0);
      AppWrapper.find('.show-details').at(0).simulate('click');
    });

    then('event details expand', () => {
      expect(AppWrapper.find(".details-view")).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, when, then }) => {
    given('user would like to hide the details of an event', () => {
      AppWrapper = mount(<App />);
      expect(AppWrapper.find('.details-view')).toHaveLength(0);
      AppWrapper.find('.show-details').at(0).simulate('click');
    });

    when('user clicks on an expanded event', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.details-view')).toHaveLength(1);
      AppWrapper.find('.show-details').at(0).simulate('click');
    });

    then('event will collapse to hide the details', () => {
      expect(AppWrapper.find('.details-view')).toHaveLength(0);
    });
  });


});