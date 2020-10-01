// Assign the data from `data.js` to a descriptive variable
// Select the button
// Select the form

let people = data,
    button = d3.select("#button"),
    form = d3.select("#form");

// Complete the event handler function for the form
const runEnter = () => {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    // Get the value property of the input element
    let inputElement = d3.select("#patient-form-input"),
        inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(people);

    let filteredData = people.filter(person => person.bloodType === inputValue);

    console.log(filteredData);

    // Use the form input to filter the data by blood type

    let age = filteredData.map(person => person.age);

    let mean = math.mean(ages),
        median = math.median(ages),
        mode = math.mode(ages),
        variance = math.variance(ages),
        standardDeviation = math.standardDeviation(ages);

    let list = d3.select(".summary");






    // BONUS: Calculate summary statistics for the age field of the filtered data

    // First, create an array with just the age values

    // Next, use math.js to calculate the mean, median, mode, var, and std of the ages

    // Finally, add the summary stats to the `ul` tag

};

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);