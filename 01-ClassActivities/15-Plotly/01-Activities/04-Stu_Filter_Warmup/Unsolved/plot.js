// Filter the top 15 cities with a population increase greater than 15,000
//  and then graph each city on the x-axis and the respective population on the y-axis.
// var filtered_cities = top15Cities.filter(cities => {parseInt(cities.Increase_from_2016 > 15000)})

// 1. Create a custom filtering function that returns
//  the cities with a population increase greater than 15,000.

function filtered_cities(city) {
    return parseInt(city.Increase_from_2016) > 15000;
}
// 2. Use filter() to pass the function as its argument
var filteredCity = top15Cities.filter(filtered_cities);


// Check to make sure you filtered your cities correctly
// HINT: console.log() is your friend.
console.log(filteredCity);

// 3. Use the map method with the arrow function to return all the filtered cities' names.
var city_name = filteredCity.map(city => city.City);

//  Check your filtered cities
console.log(city_name);

// 4. Use the map method with the arrow function to return all the filtered cities' populations.


//  Check the populations of your filtered cities

// 5. Create your trace.


// 6. Create the data array for our plot


// 7. Define our plot layout


// 8. Plot the chart to a div tag with id "bar-plot"