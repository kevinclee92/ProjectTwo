$(document).ready(function() {

  var $entryContainer = $("#entriesArea");



  function getEntries() {
    $.get("/api/tripPlanning", function(basicData) {
      $.get("/api/tripExpenses", function(detailData) {
        createResults(basicData, detailData);
      })
    })
  };

  function createResults(dataOne, dataTwo) {
    $entryContainer.empty();

    var $result = $(
      [
        '<div class="card">',
        '<h5 class="card-header">Featured</h5>',
        '<div class="card-body">',
        '<h5 class="card-title">Special title treatment</h5>',
        '<p class="card-text">With supporting text below as a natural lead-in to additional content.</p>',
        '<a href="#" class="btn btn-primary">Go somewhere</a>',
        '</div>',
        '</div>'
      ].join("")
    );

    for (var i = 0; i < dataOne.length; i++) {
      let tripId = dataOne[i].id;

      
      for (var j = 0; j < dataTwo.length; j++) {
        if (dataTwo[j].TripId === tripId) {



        }
      }


    }

  }


});