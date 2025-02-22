"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.hasMany(models.ProfileDetails, { foreignKey: "userID", as: "ProfileDetails" });
      Users.hasMany(models.Missions, { foreignKey: "createdBY", as: "missions" });
      Users.hasMany(models.Appointments, { foreignKey: "userID", as: "appointments" });
      Users.hasMany(models.Appointments, { foreignKey: "assignedBY", as: "assignedAppointments" });
      Users.hasMany(models.Notifications, { foreignKey: "userID", as: "notifications" });
      Users.belongsTo(models.Departments, { foreignKey: "departmentId", as: "department" });

    }
  }
  Users.init(
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

    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};