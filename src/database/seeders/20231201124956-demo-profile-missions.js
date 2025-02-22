'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Missions', [
      {
        name: 'Mission to Congo',
        location: 'DRC',
        start_date: new Date('2025-01-01'),
        end_date: new Date('2025-12-31'),
        description:'mission to fight all congolese terorism and terosists',
        status: 'active',
        CountryID: 1,
        createdBY: 1, // assuming the user with ID 1 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cabo dergado',
        location: 'mozambique',
        start_date: new Date('2025-03-15'),
        end_date: new Date('2025-06-30'),
        description:'mission to fight all  terorism  in mozambique and terosists',
        status: 'ongoing',
        CountryID: 2,
        createdBY: 2, // assuming the user with ID 2 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Fance meeting peace',
        location: 'france',
        start_date: new Date('2026-05-20'),
        end_date: new Date('2026-08-15'),
        description:'mission to go in france and do meeting for search for peace',
        status: 'active',
        CountryID: 3,
        createdBY: 2, // assuming the user with ID 3 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Missions', null, {});
  }
};
