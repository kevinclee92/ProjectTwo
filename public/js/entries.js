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

    for (var i = 0; i < dataTwo.length; i++) {
      let id = dataTwo[i].TripId;
      

      for (var j = 0; j < dataOne.length; j++) {
        if (dataOne[j].id === id) {

          var $result = $(
            [
              '<div class="card resultCard">',
              '<h5 class="card-header center contentFont" style="font-weight: bold;">' + dataOne[j].city + '</h5>',
              '<h5 class="card-header contentFont center">' + dataOne[j].startDate + '&nbsp; ~ &nbsp;' + dataOne[j].endDate + '</h5>',
              '<div class="card-body">',
              '<h5 class="card-title center contentFont"> Budget: <strong style="color: green;">$' + dataOne[j].initialBudget + '</strong></h5>',
              '<ul class="contentFont">' + '<li>Lodging:  $' + dataTwo[i].dailyHotelExpense + '</li>' + '<li>Food:  $' + dataTwo[i].dailyMealExpense + '</li>' + '<li>Airfare:  $' + dataTwo[i].airfareExpense + '</li>' + '<li>Transportation:  $' + dataTwo[i].transportationExpense + '</li>' + '<li>Miscellaneous Costs:  $' + dataTwo[i].miscExpense + '</li>' + '</ul>',
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