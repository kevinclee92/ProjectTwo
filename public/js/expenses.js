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
    userExpenseType: $expenseSelect.val(),
    userPlannedCost: $plannedCost.val().trim()
  };
  //add promise function
  expenseAPI.postExpenses(expenseData);
};

$costSubmit.on("click", handleExpenseSubmit);
