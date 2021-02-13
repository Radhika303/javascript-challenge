// from data.js
var tableData = data;
// select tbody 
tbody = d3.select("tbody")

// append objects into a new row 
tableData.forEach(item => {
    var tr = tbody.append('tr');
    tr.append('td').text(item.datetime);
    tr.append('td').text(item.city);
    tr.append('td').text(item.state);
    tr.append('td').text(item.country);
    tr.append('td').text(item.shape);
    tr.append('td').text(item.duration);
    tr.append('td').text(item.comments);
});

// Create button
var button = d3.select('#filter-btn');

// Input from button 
button.on('click', function() {
    // make variables for inputs and values for date and city
    var dateInput = d3.select('#date-filter');
    var dateValue = dateInput.property('value');

 // Filter data by date
 var filtered = tableData.filter(item => item.datetime === dateValue)

  // Trying to clear filter 
  tbody.html(``);
  // Lastly adding the data. 
  filtered.forEach( item => {
      var tr = tbody.append('tr');
      tr.append('td').text(item.datetime);
      tr.append('td').text(item.city);
      tr.append('td').text(item.state);
      tr.append('td').text(item.shape);
      tr.append('td').text(item.durationMinutes);
      tr.append('td').text(item.comments);
      tr.append('td').text(item.country);
  });
});
