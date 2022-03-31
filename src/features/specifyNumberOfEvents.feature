Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given user is on the main page
    When user hasn’t inputed a number of events
    Then they will see 32 events if 32 are available

  Scenario: User can change the number of events they want to see
    Given user is on the main page
    When user changes the number of events
    Then user will see the amount of events they choose