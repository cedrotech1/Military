'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notifications', [
      {
        userID: 1, // assuming user with ID 1 exists
        title: 'profile changed',
        message: 'Your appointment is scheduled for tomorrow at 10:00 AM.',
        type: 'alert',
        isRead: false, // Unread notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2, // assuming user with ID 2 exists
        title: 'profile changed',
        message: 'Your mission has been completed successfully.',
        type: 'info',
        isRead: true, // Read notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 3, // assuming user with ID 3 exists
        title: 'profile changed',
        message: 'You have a new review on your profile.',
        type: 'info',
        isRead: false, // Unread notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Notifications', null, {});
  }
};
