// Get references to page elements
var $userName = $("#nameInput");
var $userCity = $("#cityInput");
var $userStart = $("#startDate");
var $userEnd = $("#endDate");
var $submitBtn = $("#planFormSubmit");
//change for area to show example data
// var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
//
var API = {
  //saving the user infomation
  saveUsers: function(users) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/tripPlanning",
      data: JSON.stringify(users)
    });
  },
  // showing userinfo
  show: function() {
    return $.ajax({
      url: "api/tripPlanning",
      type: "GET"
    });
  },
  // deleting users
  deleteExample: function(id) {
    return $.ajax({
      url: "api/tripPlanning/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $user = data.map(function(users) {
      // change trip plal
      var $a = $("<a>")
        .text(users.text)
        .attr("href", "/tripPlanning/" + users.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($user);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var userData = {
    userName: $userName.val().trim(),
    userCity: $userCity.val().trim(),
    userStart: $userStart.val().trim(),
    userEnd: $userEnd.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(userData).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
//change later when delete function and things are set up
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
