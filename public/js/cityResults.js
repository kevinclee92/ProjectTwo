// js for the page to show the community results of certain cities
// referencing the id corresponding to the value i want
// will change when I implement autocomplete google
var $searchCity;

// grabbing all posts that have the city name as key
var cityAPI = {
  grabUsers: function (city) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/tripPlanning/" + city,
      type: "GET"
    });
  },
  grabExpenses: function (id) {
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
var userResults = function () {
  console.log($searchCity);
  // loop through Trips table and take on those where city is equal to city search
  cityAPI.grabUsers($searchCity).then(function (userData) {
    // grabbing the user filtered data and using the id to grab expense info
    console.log(userData);
    // nest everything in a for loop 
    for (i = 0; i < userData.length; i++) {
      var userId = userData[i].id;
      var userItem = userData[i];
      var userName = userData[i].name;
      var $div = $("<div>");
      // card class
      var $card = $div.addClass("card");
      var $cardHead = $("<div>").attr({
        class: "card-header",
        id: `heading${i}`
      });
      var $h5 = $("<h5>").attr("class", "mb-0");
      // adding bootstrap attr and user data into button
      var $button = $("<button>").attr({
        class: "btn btn-link accbtn",
        "data-toggle": "collapse",
        "data-target": `#collapse${i}`,
        "aria-expanded": "false",
        "aria-controls": `collapse${i}`
      }).text(`${userName}  ||  $${userItem.initialBudget}  ||  Duration ${userItem.startDate} - ${userItem.endDate}`);
      // creating the div for the content of accordion
      var $cardBodyDiv = $("<div>").attr({
        id: `collapse${i}`,
        class: "collapse",
        "aria-labelledby": `heading${i}`,
        "data-parent": "#accordion"
      });
      //grabbing the information for expense data
      cityAPI.grabExpenses(userId).then(function (expenseData) {
        // test to grab individual values
        console.log(expenseData[0].dailyHotelExpense);

        // pie chart 
        // var pieChart = `<div id="chartContainer" style="height: 300px; width: 100%;"></div>`;
        //structuring card items


        var $bodyDiv = $("<div>").addClass("card-body");
        $bodyDiv.append(`
          <ul class= "userExpense">
            <li>Lodging: ${expenseData[0].dailyHotelExpense}</li>
            <li>Food: ${expenseData[0].dailyMealExpense}</li>
            <li>Airfare: ${expenseData[0].airfareExpense}</li>
            <li>Transportation: ${expenseData[0].transportationExpense}</li>
            <li>Miscellaneous Costs: ${expenseData[0].miscExpense}</li>
          </ul>
        `)


        //appending chart
        // $cardBodyDiv.append(pieChart);
        // accordion body appends
        //appending body div to cardbodydiv
        $cardBodyDiv.append($bodyDiv);

        // appending cardbody div below card
        $card.append($cardBodyDiv);

        //canvasjs piechart
        // var options = {
        //   title: {
        //     text: `${userData.name}'s Trip`
        //   },
        //   subtitles: [{
        //     text: `${userData.startDate} - ${userData.endDate}`
        //   }],
        //   animationEnabled: true,
        //   data: [{
        //     type: "pie",
        //     startAngle: 40,
        //     toolTipContent: "<b>{label}</b>: {y}%",
        //     showInLegend: "true",
        //     legendText: "{label}",
        //     indexLabelFontSize: 10,
        //     indexLabel: "{label} - ${label2}",
        //     dataPoints: [
        //       { y: Math.floor( expenseData[0].dailyMealExpense / userData.initialBudget ), label: "Food", label2: expenseData[0].dailyMealExpense },
        //       { y: Math.floor( expenseData[0].dailyHotelExpense / userData.initialBudget ), label: "Lodging", label2: expenseData[0].dailyHotelExpense },
        //       { y: Math.floor( expenseData[0].airfareExpense / userData.initialBudget ), label: "Airfare", label2: expenseData[0].airfareExpense },
        //       { y: Math.floor( expenseData[0].transportationExpense / userData.initialBudget ), label: "Transportation", label2: expenseData[0].transportationExpense },
        //       { y: Math.floor( expenseData[0].miscExpense / userData.initialBudget ), label: "Misc", label2: expenseData[0].miscExpense },
        //     ]
        //   }]
        // };



        // $("#chartContainer").CanvasJSChart(options);
        // }
      });

      // piecing together the appends
      // appending button to h5 element
      $h5.append($button);
      // appending h5 to header
      $cardHead.append($h5);
      //appending header to card div
      $card.append($cardHead);
      //appending card body

      $("#accordion").append($card);
    }



  });
};

$("#searchSubmit").on("click", function () {

  $("#accordion").empty();
  $searchCity = $("#searchInput")
    .val()
    .trim();

  userResults();

});
