module.exports = function(sequelize, DataTypes) {
  var Expense = sequelize.define("Expense", {
    // Giving the Author model a name of type STRING
    tripId: DataTypes.INTEGER,
    dailyHotelExpense: DataTypes.NUMERIC,
    dailyMealExpense: DataTypes.NUMERIC,
    airfareExpense: DataTypes.NUMERIC,
    transportationExpense: DataTypes.NUMERIC,
    miscExpense: DataTypes.NUMERIC
  });

  Expense.associate = function(models) {
    models.Expense.belongsTo(models.Trip, {
      foreignKey: "tripId",
      targetKey: "id"
    });
  };
  return Expense;
};
