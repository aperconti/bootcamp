// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Append an SVG wrapper to the page and set a variable equal to a reference to it
// YOUR CODE HERE
var svg = d3.select('#svg-area')
    .append('svg')
    .attr('height', "600px")
    .attr('width', "400px")
    // .style('background-color', "#34eb7d")

// Vertical Bar Chart
// YOUR CODE HERE
var rectangle = svg.select('rectangle')
    .data(booksReadThisYear)
    .attr('height', d => d*10)
    .attr('width', "80px")
    .style('background-color', "#eb6e34")
    .append("rectangle")
    .attr("x", "50px")
    .attr("y", "50px")



// BONUS
// Horizontal Bar Chart
// YOUR CODE HERE

// BONUS 2
// Alter your Vertical bar chart code to go from bottom  up.
