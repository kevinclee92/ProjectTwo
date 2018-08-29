// references for page elements
var $expenseSelect = $("#expenseSelect");
var $plannedCost = $("#plannedCost");
var $costSubmit = $("#expenseFormSubmit");

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
  }
};
var handleExpenseSubmit = function(event) {
  event.preventDefault();
  var expenseData = {
    //change to match models
    dailyHotelExpense: $expenseSelect.val(),
    dailyMealExpense: $something.val(),
    airfareExpense: $somethingelse.val(),
    transportationExpense: $something2.val(),
    miscExpense: $something3.val()
  };
  //add promise function
  expenseAPI.postExpenses(expenseData);
};

$costSubmit.on("click", handleExpenseSubmit);
