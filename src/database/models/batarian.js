"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Batarians extends Model {
    static associate(models) {
      // A Batarian belongs to one Department
      Batarians.belongsTo(models.Departments, { foreignKey: "departmentId", as: "department" });
    }
  }

  Batarians.init(
    {
      name: { type: DataTypes.STRING },
      departmentId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Departments",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Batarians",
    }
  );

  return Batarians;
};
