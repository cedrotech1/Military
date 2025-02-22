"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("countries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      common_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      official_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      code: {
        type: Sequelize.STRING(3),
        allowNull: false,
        unique: true,
      },
      region: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      subregion: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      languages: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      currencies: {
        type: Sequelize.JSON,
        allowNull: true,
      },
      capital: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      flag_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      google_map_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      openstreet_map_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      timezone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      continent: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.DECIMAL(10, 7),
        allowNull: true,
      },
      longitude: {
        type: Sequelize.DECIMAL(10, 7),
        allowNull: true,
      },
      population: {
        type: Sequelize.BIGINT,
        allowNull: true,
      },
      landlocked: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("countries");
  },
};
