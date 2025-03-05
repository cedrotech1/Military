"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Soldiers extends Model {
    static associate(models) {
      Soldiers.hasMany(models.SordierSkills, { foreignKey: "userID", as: "Soldierskills" });
      Soldiers.hasMany(models.Missions, { foreignKey: "createdBY", as: "missions" });
      Soldiers.hasMany(models.Appointments, { foreignKey: "userID", as: "appointments" });
      Soldiers.hasMany(models.Appointments, { foreignKey: "assignedBY", as: "assignedAppointments" });
      Soldiers.hasMany(models.Notifications, { foreignKey: "userID", as: "notifications" });
      Soldiers.belongsTo(models.Departments, { foreignKey: "departmentId", as: "department" });
      Soldiers.belongsTo(models.Batarians, { foreignKey: "batarianId", as: "batarian" });

    }
  }
  Soldiers.init(
    {
      
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      phone: { type: DataTypes.STRING, unique: true },
      gender: DataTypes.ENUM("Male", "Female", "Other"),
      role: DataTypes.STRING,
      address: DataTypes.TEXT,
      code: DataTypes.STRING,
      hasappoitment: DataTypes.STRING,
      status: DataTypes.STRING,
      image: DataTypes.STRING,
      departmentId: { 
        type: DataTypes.INTEGER,
        references: {
          model: "Departments",
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
        allowNull: true,
      },
      rank: DataTypes.STRING,
      armyid: DataTypes.STRING,
      joindate: DataTypes.STRING,

    },
    {
      sequelize,
      modelName: "Soldiers",
    }
  );
  return Soldiers;
};