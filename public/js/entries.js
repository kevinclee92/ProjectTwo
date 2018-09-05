$(document).ready(function() {

  var $entryContainer = $("#entriesArea");

  getEntries();


  function getEntries() {
    $.get("/api/tripPlanning", function(basicData) {
      $.get("/api/tripExpenses", function(detailData) {
        createResults(basicData, detailData);
      })
    })
  };

  function createResults(dataOne, dataTwo) {
    $entryContainer.empty();

    var results = [];

    for (var i = 0; i < dataOne.length; i++) {
      let tripId = dataOne[i].id;

      for (var j = 0; j < dataTwo.length; j++) {
        if (dataTwo[j].TripId === tripId) {

          var $result = $(
            [
              '<div class="card resultCard">',
              '<h5 class="card-header center contentFont" style="font-weight: bold;">' + dataOne[i].city + '</h5>',
              '<h5 class="card-header contentFont center">' + dataOne[i].startDate + '&nbsp; ~ &nbsp;' + dataOne[i].endDate + '</h5>',
              '<div class="card-body">',
              '<h5 class="card-title center contentFont"> Budget: <strong style="color: green;">$' + dataOne[i].initialBudget + '</strong></h5>',
              '<ul class="contentFont">' + '<li>Lodging:  $' + dataTwo[j].dailyHotelExpense + '</li>' + '<li>Food:  $' + dataTwo[j].dailyMealExpense + '</li>' + '<li>Airfare:  $' + dataTwo[j].airfareExpense + '</li>' + '<li>Transportation:  $' + dataTwo[j].transportationExpense + '</li>' + '<li>Miscellaneous Costs:  $' + dataTwo[j].miscExpense + '</li>' + '</ul>',
              '</div>',
              '</div>'
            ].join("")
          );
          
          results.push($result);

        }
      }
    }

    $entryContainer.append(results);
  }


});