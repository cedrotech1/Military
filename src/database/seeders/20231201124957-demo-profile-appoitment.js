'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Appointments', [
      {
        missionID: 1, // assuming mission with ID 1 exists
        userID: 1, // assuming user with ID 1 exists
        status: 'pending',
        assignedBY: 2, // assuming user with ID 2 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        missionID: 2, // assuming mission with ID 2 exists
        userID: 2, // assuming user with ID 2 exists
        status: 'confirmed',
        assignedBY: 1, // assuming user with ID 1 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        missionID: 3, // assuming mission with ID 3 exists
        userID: 3, // assuming user with ID 3 exists
        status: 'completed',
        assignedBY: 3, // assuming user with ID 3 exists
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Appointments', null, {});
  }
};
