'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Notifications', [
      {
        userID: 1, // assuming user with ID 1 exists
        title: 'profile changed',
        message: 'Your profile has been changed, they added profile detail for you',
        type: 'alert',
        isRead: false, // Unread notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 1, // assuming user with ID 1 exists
        title: 'Appointment changed',
        message: 'Your appointment is changed from active to disactive',
        type: 'alert',
        isRead: false, // Unread notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2, // assuming user with ID 1 exists
        title: 'Your appoitment ',
        message: 'Your appointment is has been deleted !',
        type: 'alert',
        isRead: false, // Unread notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2, // assuming user with ID 1 exists
        title: 'profile changed',
        message: 'Your profile has been changed, they added profile detail for you',
        type: 'alert',
        isRead: false, // Unread notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 3, // assuming user with ID 1 exists
        title: 'Appointment changed',
        message: 'Your appointment is changed from active to disactive',
        type: 'alert',
        isRead: false, // Unread notification
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 3, // assuming user with ID 1 exists
        title: 'Your appoitment ',
        message: 'Your appointment is has been deleted !',
        type: 'alert',
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
