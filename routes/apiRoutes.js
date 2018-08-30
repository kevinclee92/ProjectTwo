var db = require("../models");

module.exports = function(app) {
  // Get all trips
  app.get("/api/trips", function(req, res) {
    db.Trip.findAll({}).then(function(plannerdb) {
      res.json(plannerdb);
    });
  });

  // Create a new trip
  app.post("/api/trips", function(req, res) {
    db.Trip.create(req.body).then(function(plannerdb) {
      res.json(plannerdb);
    });
  });

  // Delete a trip by id
  app.delete("/api/trips/:id", function(req, res) {
    db.Trip.destroy({ where: { id: req.params.id } }).then(function(plannerdb) {
      res.json(plannerdb);
    });
  });
};
// app.get("/api/somethingsomething"), function(req, res) {
//   db.Trip.findAll({ 
//     city: $searchformvalue
//   }).then(function(results){
//     console.log('Tom went to malibu and spent $$')
//   })
// }