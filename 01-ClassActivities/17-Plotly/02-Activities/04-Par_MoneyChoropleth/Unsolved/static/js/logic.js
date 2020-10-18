// Creating map object
var myMap = L.map("map", {
    center: [34.000, -117.000],
    zoom: 8
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

// Load in GeoJson data
var geoData = "static/data/Median_Household_Income_2016.geojson";

// TODO:

// Grab data with d3
d3.json(geoData).then(data => {
    console.log(data)

    // Create a new choropleth layer
    let chorlayer = L.choropleth(data, {
        valueProperty: "MHI2016",
        scale: ["#000000", "#d3d3d3"],
        steps: 10,
        mode: 'q',
        style: {
            color: "#000000",
            weight: .4,
            fillOpacity: .8
        },
        onEachFeacher: function (feature, layers) {
            layers.bindPopup(`${feature.properties.ZIP}: ${feature.properties.MHI2016}`)
            {

            }.addTo(myMap)
})
    // Define what  property in the features to use

    // Set color scale

    // Number of breaks in step range

    // q for quartile, e for equidistant, k for k-means

    // Binding a pop-up to each layer

  // Set up the legend

    // Add min & max

  // Adding legend to the map
});