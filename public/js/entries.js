$(document).ready(function() {
  var $entryContainer = $("#entriesArea");

  getEntries();

  function getEntries() {
    $.get("/api/tripPlanning", function(basicData) {
      $.get("/api/tripExpenses", function(detailData) {
        createResults(basicData, detailData);
      });
    });
  }

  function createResults(dataOne, dataTwo) {
    $entryContainer.empty();

    var results = [];

    for (var i = 0; i < dataTwo.length; i++) {
      var id = dataTwo[i].TripId;

      for (var j = 0; j < dataOne.length; j++) {
        if (dataOne[j].id === id) {
          var $result = $(
            [
              '<div class="card resultCard">',
              '<h5 class="card-header center contentFont" style="font-weight: bold;">' +
                dataOne[j].city +
                "</h5>",
              '<h5 class="contentFont center" style="margin-top: 10px;">' +
                dataOne[j].startDate +
                "&nbsp; ~ &nbsp;" +
                dataOne[j].endDate +
                "</h5>",
              '<div class="card-body">',
              '<h5 class="card-title contentFont" style="font-weight: bold"> Budget: <strong style="color: green;">$' +
                dataOne[j].initialBudget +
                "</strong></h5>",
              '<div class="contentFont">' +
                "<h6 style='font-size: 16px;'>Lodging:  <strong>$" +
                dataTwo[i].dailyHotelExpense +
                "</strong></h6>" +
                "<h6 style='font-size: 16px;'>Food:  <strong>$" +
                dataTwo[i].dailyMealExpense +
                "</strong></h6>" +
                "<h6 style='font-size: 16px;'>Airfare:  <strong>$" +
                dataTwo[i].airfareExpense +
                "</strong></h6>" +
                "<h6 style='font-size: 16px;'>Transportation:  <strong>$" +
                dataTwo[i].transportationExpense +
                "</strong></h6>" +
                "<h6 style='font-size: 16px;'>Miscellaneous Costs:  <strong>$" +
                dataTwo[i].miscExpense +
                "</strong></h6>" +
                "</div>",
              "</div>",
              "</div>"
            ].join("")
          );

          results.push($result);
        }
      }
    }

    $entryContainer.append(results);
  }
});
