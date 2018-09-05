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
      var userItem = userData[i];
      //grabbing the information for expense data
      cityAPI.grabExpenses(userId).then(function(expenseData) {
        // grabbing all the expense data for the filtered users and spitting them out to DOM
        // test to grab individual values
        console.log(expenseData[i]);
        //structuring card items
        var $div = $("<div>");
        // card class
        var $card = $div.addClass("card");
        var $cardHead = $("<div>").attr({
          class: "card-header",
          id: `heading${i}`});
        var $h5 = $("<h5>").attr("class", "mb-0");
        // adding bootstrap attr and user data into button
        var $button = $("<button>").attr({
          class: "btn btn-link accbtn",
          "data-toggle" : "collapse",
          "data-target" : `#collapse${i}`,
          "aria-expanded" : "false",
          "aria-controls" : `collapse${i}`
        }).text(`${userItem.name}  ||  $${userItem.initialBudget}  ||  Duration ${userItem.startDate} - ${userItem.endDate}`);
        // creating the div for the content of accordion
        var $cardBodyDiv = $("<div>").attr({
          id: `collapse${i}`,
          class: "collapse",
          "aria-labelledby": `heading${i}`,
          "data-parent": "#accordion"
        });
        var $bodyDiv = $("<div>").addClass("card-body");
        $bodyDiv.append(`
          <ul class= "userExpense">
            <li>Lodging: ${expenseData[i].dailyHotelExpense}</li>
            <li>Food: ${expenseData[i].dailyMealExpense}</li>
            <li>Airfare: ${expenseData[i].airfareExpense}</li>
            <li>Transportation: ${expenseData[i].transportationExpense}</li>
            <li>Miscellaneous Costs: ${expenseData[i].miscExpense}</li>
        `)
        // piecing together the appends
        // appending button to h5 element
        $h5.append($button);
        // appending h5 to header
        $cardHead.append($h5);
        //appending header to card div
        $card.append($cardHead);

        // accordion body appends
        //appending body div to cardbodydiv
        $cardBodyDiv.append($bodyDiv);

        // appending cardbody div below card
        $card.append($cardBodyDiv);

        //adding into the section
        $("#accordion").append($card);

      });
    }
    
  
    
  });
};

$("#searchSubmit").on("click", function() {

  $("#accordion").empty();
  $searchCity = $("#searchInput")
  .val()
  .trim();
  userResults();
});
