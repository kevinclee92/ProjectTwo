"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
<<<<<<< HEAD
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === "Index.js"
=======
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === "index.js"
>>>>>>> 04fc833ff25f7e55619e0d4d750e9f9f4aa48dd7
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
