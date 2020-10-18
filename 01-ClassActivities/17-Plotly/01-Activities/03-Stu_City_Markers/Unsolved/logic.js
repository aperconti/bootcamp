// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// City markers

// Add code to create a marker for each city below and add it to the map

// newyork;
// These coordinates are in kyrgyzstan!!
// The coordinates were incorrect, and the long should be negative
// newyork 40.7128° N, -74.0060° W;
// chicago 41.8781° N, 87.6298° W;
// houston 29.7604° N, 95.3698° W;
// la 34.0522° N, 118.2437° W;
var marker = L.marker([40.7128, -73.935242], {
    draggable: true,
    title: "New York"
}).addTo(myMap);

//40.71, 74.00

// chicago;
//41.87, 87.62

var marker = L.marker([41.87, -87.62], {
    draggable: true,
    title: "chicago"
}).addTo(myMap);

// houston;
//29.76, 95.36

// la;
//34.05, 118.24
// omaha;
//41.25, -95.99

marker.bindPopup("New York; ");
marker.bindPopup("chicago; ");