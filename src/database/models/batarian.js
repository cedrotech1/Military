"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Batarians extends Model {
    static associate(models) {
      // A Batarian has many Departments
      Batarians.hasMany(models.Departments, { foreignKey: "batarianId", as: "departments" });
    }
  }

  Batarians.init(
    {
      name: { type: DataTypes.STRING },
    
    },
    {
      sequelize,
      modelName: "Batarians",
    }
  );

  return Batarians;
};
