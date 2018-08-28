// INSERT INTO Trip (name, startDate, endDate, city, country) values ('James', '08/30/2018', '09/02/2018', 'San Diego', 'United States');
// INSERT INTO Trip (name, startDate, endDate, city, country) values ('Bob', '09/15/2018', '09/17/2018', 'Tucson', 'United States');
// INSERT INTO Trip (name, startDate, endDate, city, country) values ('Sam', '12/10/2018', '12/15/2018', 'Paris', 'France');
// INSERT INTO Trip (name, startDate, endDate, city, country) values ('Kayla', '11/12/2018', '11/18/2018', 'Miami', 'United States');

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

// $ node_modules/.bin/sequelize db:seed:all