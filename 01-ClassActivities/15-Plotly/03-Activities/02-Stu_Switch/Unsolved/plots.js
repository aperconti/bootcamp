// Initializes the page with a default plot
function initilize() {
    var trace = {
        x: [1,2,3,4],
        y: [10,15,20,25,]
    };

    var my_data = [trace];

    var my_chart = d3.selectAll("#plot").node();

    Plotly.newPlot(my_chart, my_data);

};

// Call updatePlotly() when a change takes place to the DOM


// This function is called when a dropdown menu item is selected

  // Use D3 to select the dropdown menu

  // Assign the value of the dropdown menu option to a variable


  // Initialize x and y arrays



  // Restyle the chart with new information. Note the extra brackets around 'x' and 'y'
