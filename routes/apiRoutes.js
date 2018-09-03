var db = require("../models");

module.exports = function(app) {
  // Get all user basic info
  app.get("/api/tripPlanning", function(req, res) {
    db.Trip.findAll({}).then(function(userExamples) {
      res.json(userExamples);
    });
  });

  // Create a new user data api
  app.post("/api/tripPlanning", function(req, res) {
    db.Trip.create(req.body).then(function(userExamples) {
      res.json(userExamples);
    });
  });

  // expenses api page
  app.get("/api/tripExpenses", function(req, res) {
    db.Expense.findAll({}).then(function(userExamples) {
      res.json(userExamples);
    });
  });

  // Create a new user data api
  app.post("/api/tripExpenses", function(req, res) {
    db.Expense.create(req.body).then(function(userExamples) {
      res.json(userExamples);
    });
  });

  // Delete an example by id
  app.delete("/api/tripPlanning/:id", function(req, res) {
    db.Trip.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.delete("/api/tripExpenses/:id", function(req, res) {
    db.Expense.destroy({
      where: {
        TripId: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
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