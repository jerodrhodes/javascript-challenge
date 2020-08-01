// from data.js
var tableData = data;

// Reference to the table body
var tbody = d3.select("tbody");

// console.log the data
console.log(tableData);

// Loop through data and console.log each sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // use d3 to append each 'tr' for each sighting
    var row = tbody.append("tr");
    // Object.entries to console.log each sighting
    Object.entries(ufoSighting).forEach(([key, value]) => {
        console.log(key, value);
        // Append cell to the row in the sighting object
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Select the 'Filter Table' button
var button = d3.select("filter-btn");
// Create event handler
button.on("click", function() {
    // Prevent page refresh
    d3.event.preventDefalut();
    // Select datetime as input
    var inputElement = d3.select("#datetime");
    // Obtain datetime value
    var inputValue = inputElement.property("value");
    // Filter data based on date input
    var filteredData = tableData.filter(table => table.datetime === inputValue);
    buildTable(filteredData)

});

// Loop through filtered data
function buildTable(dataFilter) {
    tbody.html("");
    dataFilter.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
            var cell = tbody.append("td");
        });
    });
}
