Feature: Show / Hide event details

  Scenario: An event element is collapsed by default.
    Given user is on the main page
    When nothing is clicked on an event
    Then the event details will be collapsed

  Scenario: User can expand an event to see its details
    Given user would like to see details on the event
    When user clicks that event
    Then event details expand

  Scenario: User can collapse an event to hide its details
    Given user would like to hide the details of an event
    When user clicks on an expanded event
    Then event will collapse to hide the details