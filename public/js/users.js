var $userName = $("#nameInput");
var $userCity = $("#cityInput");
var $userStart = $("#startDate");
var $userEnd = $("#endDate");
var $submitBtn = $("#planFormSubmit");

// userAPI object for methods
var userAPI = {
  // saving user date (POST)
  saveUsers: function(users) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/tripPlanning",
      data: JSON.stringify(users)
    });
  }
};

var handleUserSubmit = function(event) {
  event.preventDefault();

  var userData = {
    userName: $userName.val().trim(),
    userCity: $userCity.val().trim(),
    userStart: $userStart.val().trim(),
    userEnd: $userEnd.val().trim()
  };
  // add promise function
  userAPI.saveUsers(userData);
};

$submitBtn.on("click", handleUserSubmit);
