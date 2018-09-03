var $userName = $("#nameInput");
var $userCity = $("#cityInput");
var $userStart = $("#startDate");
var $userEnd = $("#endDate");
var $initialBudget = $("#budgetInput");
var $submitBtn = $("#planFormSubmit");

// userAPI object for methods
var userAPI = {
  // saving user date (POST)
  saveUsers: function(user) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/tripPlanning",
      data: JSON.stringify(user)
    });
  },
  testingClick: function() {
    console.log("something");
  }
};

var handleUserSubmit = function(event) {
  event.preventDefault();

  var users = {
    name: $userName.val().trim(),
    city: $userCity.val().trim(),
    startDate: $userStart.val().trim(),
    endDate: $userEnd.val().trim(),
    initialBudget: $initialBudget.val().trim()
    //if using Google autocomplete we wont need country
  };
  console.log(users);

  userAPI.saveUsers(users);
  // add promise function
  // userAPI.saveUsers(users);
};

$submitBtn.on("click", handleUserSubmit);
