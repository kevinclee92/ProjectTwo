// To commit this seed file to your database, run "sequelize db:seed:all"

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Trip', [{
        name: 'James',
        startDate: '08/30/2018',
        endDate: '09/02/2018',
        city: 'San Diego',
        country: 'United States'
      },
    {
      name: 'Bob',
      startDate: '09/15/2018',
      endDate: '09/23/2018',
      city: 'Paris',
      country: 'France'
    },
    {
        name: 'Kayla',
        startDate: '11/12/2018',
        endDate: '11/18/2018',
        city: 'Miami',
        country: 'United States'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Trip', null, {});
  }
};