// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 6);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// // Create a red circle over Dallas
// L.marker([32.7767, -96.7970]).addTo(myMap);


// Create a circle and pass in some initial options
let dallas = [32.7767, -96.7970]
L.circle(dallas, {
    color: "Red",
    fillColor: "Red",
    // fillOpacity: 0.75,
    radius: 60000
}).addTo(myMap);

// Connect a black line from NYC to Toronto

L.polygon([
    [40.7128, -74.0060],
    [43.6532, -79.3832]
], {
    color: "black",
    fillColor: "black",
    fillOpacity: 0.75
}).addTo(myMap);

//e polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
