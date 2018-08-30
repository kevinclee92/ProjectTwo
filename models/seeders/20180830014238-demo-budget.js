// To commit this seed file to your database, run "sequelize db:seed:all"

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Budget', [{
      tripId: 1,
      dailyHotelCost: 100.00,
      dailyMealCost: 30.00,
      airfareCost: 449.80,
      transportationCost: 48.00,
      miscCost: 35.00
      },
    {
      tripId: 2,
      dailyHotelCost: 300.00,
      dailyMealCost: 80.00,
      airfareCost: 320.60,
      transportationCost: 20.00,
      miscCost: 170.00
    },
    {
      tripId: 3,
      dailyHotelCost: 200.00,
      dailyMealCost: 32.00,
      airfareCost: 602.00,
      transportationCost: 13.00,
      miscCost: 0
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Budget', null, {});
  }
};