console.log(data);
// YOUR CODE HERE

// Create our first trace
var trace1 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.greekSearchResults),
    text: data.map(row => row.greekName),
    name: "Greek",
    type: "bar"
};


// Create our first trace
var trace2 = {
    x: data.map(row => row.pair),
    y: data.map(row => row.romanSearchResults),
    text: data.map(row => row.romanName),
    name: "Roman",
    type: "bar"
};


var data = [trace1, trace2];

Plotly.newPlot("plot", data);