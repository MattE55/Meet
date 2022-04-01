import { loadFeature, defineFeature } from 'jest-cucumber';
import React from "react";
import { mount } from "enzyme";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  let AppWrapper;
  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('user is on the main page', () => {
      AppWrapper = mount(<App />)
    });

    when('user hasn’t inputed a number of events', () => {
      AppWrapper.update();
    });

    then(/^they will see (\d+) events if (\d+) are available$/, (arg0, arg1) => {
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    given('user is on the main page', () => {
      AppWrapper = mount(<App />)
    });

    when('user changes the number of events', async () => {
      const eventNumber = { target: { value: 1 } };
      await AppWrapper.find('.inputNumber').simulate('change', eventNumber);
      AppWrapper.update();
    });

    then('user will see the amount of events they choose', () => {
      expect(AppWrapper.state("numberOfEvents")).toBe(1);
      expect(AppWrapper.find(".event")).toHaveLength(1);
    });
  });


});