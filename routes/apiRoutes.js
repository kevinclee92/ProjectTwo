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

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
