"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Batarians", [
      {
        name: "Batarian Alpha",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batarian Bravo",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Batarians", null, {});
  },
};
