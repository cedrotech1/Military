'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProfileDetails', [
      {
        userID: 1, // assuming user with ID 1 exists
        categoryID: 1, // assuming category with ID 1 exists
        name: 'Profile Picture', 
        image: null,
        description:'descrpition',
      
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 2, // assuming user with ID 2 exists
        categoryID: 2, // assuming category with ID 2 exists
        name: 'certificate',
        description:'certificate in software development',
        image: null,
        status: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userID: 3, // assuming user with ID 3 exists
        categoryID: 3, // assuming category with ID 3 exists
        name: 'skills',
        description:'skills in software development',
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
