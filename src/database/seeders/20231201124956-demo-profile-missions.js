'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Missions', [
      {
        name: 'Mission to Mars',
        location: 'Mars',
        start_date: new Date('2025-01-01'),
        end_date: new Date('2025-12-31'),
        description:'descrpition',
        status: 'active',
        createdBY: 1, // assuming the user with ID 1 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Lunar Exploration',
        location: 'Moon',
        start_date: new Date('2025-03-15'),
        end_date: new Date('2025-06-30'),
        description:'descrpition',
        status: 'pending',
        createdBY: 2, // assuming the user with ID 2 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Venus Exploration',
        location: 'Venus',
        start_date: new Date('2026-05-20'),
        end_date: new Date('2026-08-15'),
        description:'descrpition',
        status: 'completed',
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
