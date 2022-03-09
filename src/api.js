export const extractLocations = (events) => {
  var extractLocations = events.map((event) => event.location);
  var locations = [...new Set(extractLocations)];
  return locations;
};

export const extractDescriptions = (events) => {
  var extractDescriptions = events.map((event) => event.description);
  var descriptions = [...new Set(extractDescriptions)];
  return descriptions;
}