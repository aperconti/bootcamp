// Data which we will be using to build our rectangle
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select('#svg-area')
    .append('svg')
    .attr('height', "600px")
    .attr('width', "400px")
    .style('background-color', "#34eb7d")
    .on('mouseover');

// Append a rectangle and set its height in relation to the booksReadThisYear value

svg.on("mouseover", function(event) {


} )