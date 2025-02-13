'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProfileDetails', [
      {
        userID: 1, // assuming user with ID 1 exists
        categoryID: 1, // assuming category with ID 1 exists
        name: 'Profile Picture',
        description:'descrpition',
        image: 'http://res.cloudinary.com/dzl8xve8s/image/upload/v1724766686/Card/profilepic.png',
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2, // assuming user with ID 2 exists
        categoryID: 2, // assuming category with ID 2 exists
        name: 'Username',
        description:'descrpition',
        image: null,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 3, // assuming user with ID 3 exists
        categoryID: 3, // assuming category with ID 3 exists
        name: 'Security Question',
        description:'descrpition',
        image: null,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProfileDetails', null, {});
  }
};
