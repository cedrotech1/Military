"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Soldiers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
     
      password: {
        type: Sequelize.STRING,
        allowNull: false, // Removed unique constraint
      },
      phone: {
        type: Sequelize.STRING,
        unique: true,
      },
      gender: {
        type: Sequelize.ENUM("Male", "Female", "Other"),
      },
      role: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.TEXT,
      },
      code: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
      departmentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        // references: {
        //   model: "Departments",
        //   key: "id",
        // },
        // onUpdate: "CASCADE",
        // onDelete: "SET NULL",
      },
      batarianId:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      armyid: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      joindate: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      hasappoitment:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      rank: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Soldiers");
  },
};
