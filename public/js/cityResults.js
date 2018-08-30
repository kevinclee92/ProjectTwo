// js for the page to show the community results of certain cities
// referencing the id corresponding to the value i want
// will change when I implement autocomplete google
var searchInput = $("#searchInput");

// grabbing all posts that have the city name as key
var cityAPI = {
  grabUsers: function() {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET"
    });
  },
  grabExpenses: function() {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "GET"
    });
  }
  // grab budget info with GET ajax call
};
