// references for page elements
// var $expenseSelect = $("#expenseSelect");
var $food = $("#food");
var $lodging = $("#lodging");
var $airfare = $("#airfare");
var $transportation = $("#transportation");
var $misc = $("#misc");
var $detailsSubmit = $("#expenseFormSubmit");
var currentTripId;

// grabbing the values and sending them to mysql database
// object holding all .ajax methods for sending and grabbing data
var expenseAPI = {
  // POST data
  postExpenses: function(expenses) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/tripExpenses",
      data: JSON.stringify(expenses)
    });
  },
  getUserExamples: function() {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      url: "/api/tripPlanning",
      type: "GET"
    });
  },
  // deleting users
  deleteUsers: function(id) {
    return $.ajax({
      url: "/api/tripPlanning/" + id,
      type: "DELETE"
    });
  }
};

// grabbing the id and setting it to variable currentTripId
var currentTrip = function() {
  //accessing info from get
  expenseAPI.getUserExamples().then(function(data){
    var newestId = data.length - 1;
    currentTripId = data[newestId].id;
  });
}

// appending data to #tripExamples
var tripExample = function() {
  expenseAPI.getUserExamples().then(function(data) {
    $("#tripExamples").empty();
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(`${example.name} ${example.city} ${example.startDate} ${example.endDate} $${example.initialBudget}`)
        .attr("href", "/tripPlanning/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item resultItem",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    })
    $("#tripExamples").append($examples);

  })
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  expenseAPI.deleteUsers(idToDelete).then(function() {
    tripExample();
  });
};

var handleExpenseSubmit = function(event) {
  event.preventDefault();
  var expenseData = {
    //change to match models
    dailyHotelExpense: $lodging.val(),
    dailyMealExpense: $food.val(),
    airfareExpense: $airfare.val(),
    transportationExpense: $transportation.val(),
    miscExpense: $misc.val(),
    TripId: currentTripId
  };
  console.log(expenseData);
  //add promise function
  expenseAPI.postExpenses(expenseData);
};

$detailsSubmit.on("click", handleExpenseSubmit);
$("#tripExamples").on("click", ".delete",handleDeleteBtnClick)
$(document).ready(function() {
  currentTrip();
  tripExample();
});