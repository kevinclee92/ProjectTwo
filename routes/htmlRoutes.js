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
  app.get("/search", function(req, res) {
    res.render("search");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/submission", function(req, res) {
    res.render("submission");
  });

  app.get("/formResult", function(req, res) {
    res.render("formResult"); 
  });
  app.get("/tripExpenses", function(req, res) {
    res.render("tripExpenses");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
