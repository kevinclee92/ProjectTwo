module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    initialBudget: DataTypes.NUMERIC
  });

  Trip.associate = function(models) {
    Trip.hasMany(models.Expense, {
      onDelete: "cascade"
    });
  };

  return Trip;
};
