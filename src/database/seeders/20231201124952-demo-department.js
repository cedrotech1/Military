"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Departments", [
      {
        name: "Department 1",
        description: "Department 1 fro batarian 23, division",
        readerId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Departments", null, {});
  },
};
