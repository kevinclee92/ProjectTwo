module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    city: DataTypes.STRING,
    country: DataTypes.STRING
  });

  Trip.associate = function(models) {
    Trip.hasMany(models.Budget, {
      foreignKey: "tripId",
      sourceKey: "id",
      onDelete: "cascade"
    });
    Trip.hasMany(models.Expense, {
      foreignKey: "tripId",
      sourceKey: "id",
      onDelete: "cascade"
    });
  };

  return Trip;
};
