// from data.js
var tableData = data;

// YOUR CODE HERE!
// Level 1: Automatic Table and Date Search
// Create a basic HTML web page or use the index.html file provided (we recommend building your own custom page!).
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page and then adds new rows of data for each UFO sighting.

// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.

// define tbody with d3
var tbody = d3.select("tbody");
// add table rows to table
data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

// Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.
// Getting a reference to the input element on the page with the id property set to 'datetime'
// Getting a reference to the button on the page with the id property set to `filter-btn`
var button = d3.select("#filter-btn");

button.on("click", function() {
  //keep page from refreshing when button clicked
  d3.event.preventDefault();
  //remove unfiltered table, provide "blank slate" for filtered data to be displayed (.empty did not work properly)
  d3.selectAll("td").remove();
  //declare variables for input
  var inputField = d3.select("#datetime");
  var inputValue = inputField.property("value");
  //make sure it is selecting the proper data
  console.log(inputValue);
  //filter for specific dates and console.log to make sure filter is working
  var filteredData = data.filter(data => data.datetime ===inputValue);
  console.log(filteredData);
  //make new table with filtered data, add rows and cells with data
    filteredData.forEach((newTable) => {
      var row = tbody.append("tr");
    Object.entries(newTable).forEach(([key,value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
    })
    });



// Level 2: Multiple Search Categories (Optional)


// Complete all of Level 1 criteria.
// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and search for UFO sightings using the following criteria based on the table columns:



// date/time
// city
// state
// country
// shape


