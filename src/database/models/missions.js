"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Missions extends Model {
    static associate(models) {
      Missions.belongsTo(models.Users, { foreignKey: "createdBY", as: "creator" });
      Missions.hasMany(models.Appointments, { foreignKey: "missionID", as: "appointments" });
    }
  }
  Missions.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
      createdBY: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Missions",
    }
  );
  return Missions;
};