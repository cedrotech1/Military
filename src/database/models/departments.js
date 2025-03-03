"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    static associate(models) {
      Departments.hasMany(models.Users, { foreignKey: "departmentId", as: "members" });
      Departments.belongsTo(models.Users, { foreignKey: "readerId", as: "reader" });

      // New association: Each department belongs to a Batarian
      Departments.belongsTo(models.Batarians, { foreignKey: "batarianId", as: "batarian" });
    }
  }

  Departments.init(
    {
      name: { type: DataTypes.STRING, unique: true },
      description: DataTypes.TEXT,
      readerId: { 
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: true,
      },
      batarianId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Batarians",
          key: "id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Departments",
    }
  );

  return Departments;
};
