var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });
  app.get("/tripPlanning", function(req, res) {
    res.render("tripPlanning");
  });
  app.get("/tripPlanningDetails", function(req, res) {
    res.render("tripPlanningDetails");
  });
  app.get("/city", function(req, res) {
    res.render("city");
  });
  app.get("/trip", function(req, res) {
    res.render("trip");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(plannerdb) {
      res.render("example", {
        example: plannerdb
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
