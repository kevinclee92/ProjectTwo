// js for the page to show the community results of certain cities
// referencing the id corresponding to the value i want
// will change when I implement autocomplete google
var $searchCity;

// grabbing all posts that have the city name as key
var cityAPI = {
  grabUsers: function(city) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/tripPlanning/" + city,
      type: "GET"
    });
  },
  grabExpenses: function(id) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/tripExpenses/" + id,
      type: "GET"
    });
  }
  // grab budget info with GET ajax call
};

// grabbing user info for header information
var userResults = function() {
  console.log($searchCity);
  // loop through Trips table and take on those where city is equal to city search
  cityAPI.grabUsers($searchCity).then(function(userData) {
    // grabbing the user filtered data and using the id to grab expense info
    console.log(userData);
    // nest everything in a for loop 
    for(let i = 0; i < userData.length; i++) {
      var userId = userData[i].id;
      //grabbing the information for expense data
      cityAPI.grabExpenses(userId).then(function(expenseData) {
        // grabbing all the expense data for the filtered users and spitting them out to DOM
        console.log(expenseData);
      });
    }
    
  
    
  });
};

$("#searchSubmit").on("click", function() {
  $searchCity = $("#searchInput")
  .val()
  .trim();
  userResults();
});
