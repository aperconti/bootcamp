// Sort the data by Greek search results
var sortedData = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
console.log(sortedData);

// Slice the first 10 objects for plotting
var tenObjects = sortedData.slice(0,11);
console.log(tenObjects);
// Reverse the array to accommodate Plotly's defaults
var reversedTenObjects = tenObjects.reverse();
console.log(reversedTenObjects);

// Trace1 for the Greek Data

var trace1 = {
    title: "greek god search",
    x: reversedTenObjects.map(object => object.greekSearchResults),
    y: reversedTenObjects.map(object => object.greekName),
    text: reversedTenObjects.map(object => object.greekName),
    name: "Greek",
    type: "bar",
    orientation: "h"

};


// data
var data = [trace1];


// Apply the group bar mode to the layout
var layout = {
    title: "Greek gods search results"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
// data

// Apply the group bar mode to the layout

// Render the plot to the div tag with id "plot"
