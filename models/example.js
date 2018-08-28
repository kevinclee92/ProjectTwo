module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Author model a name of type STRING
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  var Trip = sequelize.define("Trip", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    city: DataTypes.STRING
  });

  var Budget = sequelize.define("Budget", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  });

  var Expense = sequelize.define("Expense", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    cost: DataTypes.DECIMAL
  });

  Trip.belongsTo(User);
  Budget.belongsTo(Trip);
  Expense.belongsTo(Trip);
};
