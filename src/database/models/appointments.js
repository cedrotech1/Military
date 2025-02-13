"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    static associate(models) {
      Appointments.belongsTo(models.Users, { foreignKey: "userID", as: "user" });
      Appointments.belongsTo(models.Users, { foreignKey: "assignedBY", as: "assigner" });
      Appointments.belongsTo(models.Missions, { foreignKey: "missionID", as: "mission" });
    }
  }
  Appointments.init(
    {
      missionID: DataTypes.INTEGER,
      userID: DataTypes.INTEGER,
      status: DataTypes.STRING,
      assignedBY: DataTypes.INTEGER,
    },
    {   
      sequelize,
      modelName: "Appointments",
    }
  );
  return Appointments;
};