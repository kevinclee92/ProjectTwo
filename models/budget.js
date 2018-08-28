module.exports = function(sequelize, DataTypes) {
  var Budget = sequelize.define("Budget", {
    // Giving the Author model a name of type STRING
    tripId: DataTypes.INTEGER, 
    dailyHotelCost: DataTypes.NUMERIC,
    dailyMealCost: DataTypes.NUMERIC,
    airfareCost: DataTypes.NUMERIC,
    transportationCost: DataTypes.NUMERIC,
    miscCost: DataTypes.NUMERIC
  });

  Budget.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    models.Budget.belongsTo(models.Trip, {
      foreignKey: "tripId",
      targetKey: "id"
    });
  };

  return Budget;
};
