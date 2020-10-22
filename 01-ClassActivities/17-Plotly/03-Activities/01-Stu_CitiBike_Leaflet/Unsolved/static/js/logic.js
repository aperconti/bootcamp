// var newYorkCoords = [40.73, -74.0059];
// var mapZoomLevel = 12;

// Create the createMap function
// Creating map object
function createMap(markers) {



    // Create the tile layer that will be the background of our map

    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "mapbox/light-v10",
        accessToken: API_KEY
    });
    // Create a baseMaps object to hold the lightmap layer
    let baseMap = {
        Light: lightmap
    }

    // Create an overlayMaps object to hold the bikeStations layer

    let overlayMaps = {
        stations: markers
    }
    // Create the map object with options

    let myMap = L.map("map-id") {
        center: newYorkCoords
    zoom: mapZoomLevel
    layers: { lightmap, markers }
    }

    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map

    // Create the createMarkers function
    function createMarkers(response) {
        // Pull the "stations" property off of response.data
        let stations = response.data.stations
        // Initialize an array to hold bike markers
        let markers = [];
        // Loop through the stations array
        // For each station, create a marker and bind a popup with the station's name
        stations.forEach(station => {


            // Add the marker to the bikeMarkers array
            markers.push(L.marker([station.lat, station.lon]))
        });
        // Create a layer group made from the bike markers array, pass it into the createMap function
        var overlayMaps = {
            "Bike Stations": bikeStations
        };
    }
    // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
    d3.json("https://gbfs.citibikenyc.com/gbfs/en/station_information.json").then(data => {
        console.log(data)
        createMarkers(data)
    })