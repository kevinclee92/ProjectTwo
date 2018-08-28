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
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Trip.hasMany(models.Budget, {
      onDelete: "cascade"
    });
    Trip.hasMany(models.Expense, {
      onDelete: "cascade"
    });
  };

  return Trip;
};
