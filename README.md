# Meet App

### Hello! I am a student and this is my Meet React App. 

## Objective

 I created this app with careerfoundry and used to learn how to build a serverless, progressive web application with React using test driven development.
 This application uses the Google Calendar API to fetch events.

## Key Features

Feature 

1. The User should be able to Filter events by city.

Scenario 
1. When a user hasn't searched for a city, show upcoming events from all cities.
 - Given a user hasn't searched for a city
 - When the user opens the app
 - Then the user should see a list of all upcoming events

Scenario 
2. User should see a list of suggestions when they search for a city.
 - Given the main page is open
 - When user starts typing in the city textbox
 - Then the user should see a list of cities (suggestions) that match what they've typed

Scenario 
3. User can select a city from the suggested list.
 - Given the user was typing "Berlin" in the city textbox
 - And the list of suggested cities is showing
 - When the user selects a city from the list
 - Then their city should be changed to that city
 - And the user should receive a list of upcoming events in that city

Feature 
2. The user should be able to click on an event so they can show or hide details for that certain event.

Scenario 
1. An event element is collapsed by default 
 - Given a user is on the main page
 - When nothing is clicked
 - Then the event details will be collapsed

Scenario 
2. User can expand an event to see its details 
 - Given a user would like to see details on the event When the user clicks that event
 - Then the event details expand

Scenario 
3. User can collapse an event to hide its details 
 - Given a user would like to hide the details of an event When the user clicks on an expanded event
 - Then the event will collapse to hide the details

Feature 
3. The user should be able to choose the amount of events they see at one time.

Scenario 
1. When the user hasn’t specified a number, 32 is the default number 
 - Given a user has not inputed how many events they want to see on the page When the user opens the main page with events
 - Then they will see 32 events

Scenario 
2. User can change the number of events they want to see
 - Given a user wants to change their preferred number of events on the page When they click the event dropdown
 - Then they will see the amount of events they choose to see

Feature 
4. The user should be able to use the app when offline.

Scenario 
1. Show cached data when there’s no internet connection 
 - Given the user is offline trying to use the app
 - When the user opens the app with cached data
 - Then the cached data will be available to use in the app

Scenario 
2. Show error when user changes the settings (city, time range) 
 - Given the user is offline trying to use the app
 - When the user tries to change their city and time range settings Then they will receive an error

Feature 
5. The user should be able to see charts showing dates of events.

Scenario 
1. Show a chart with the number of upcoming events in each city
 - Given the user is on the main page
 - When they want to see upcoming events in each city
 - Then they will be able to see a chart with the number of upcoming events in
each city
