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
              '<h5 class="card-title center contentFont"> Budget: <strong style="color: green;">$' +
                dataOne[j].initialBudget +
                "</strong></h5>",
              '<ul class="contentFont">' +
                "<li>Lodging:  <strong>$" +
                dataTwo[i].dailyHotelExpense +
                "</strong></li>" +
                "<li>Food:  <strong>$" +
                dataTwo[i].dailyMealExpense +
                "</strong></li>" +
                "<li>Airfare:  <strong>$" +
                dataTwo[i].airfareExpense +
                "</strong></li>" +
                "<li>Transportation:  <strong>$" +
                dataTwo[i].transportationExpense +
                "</strong></li>" +
                "<li>Miscellaneous Costs:  <strong>$" +
                dataTwo[i].miscExpense +
                "</strong></li>" +
                "</ul>",
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
