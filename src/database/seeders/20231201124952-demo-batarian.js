"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Batarians", [
      {
        name: "Batarian Alpha",
        departmentId: 1, // Now references an existing department
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batarian Bravo",
        departmentId: 1, // Belongs to the same department
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Batarians", null, {});
  },
};
