"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.Missions, { foreignKey: "CountryID", as: "missionscountry" });
    }
  }

  Country.init(
    {
      common_name: { type: DataTypes.STRING, allowNull: false },
      official_name: { type: DataTypes.STRING, allowNull: true },
      code: { type: DataTypes.STRING(3), allowNull: false, unique: true },
      region: { type: DataTypes.STRING, allowNull: true },
      subregion: { type: DataTypes.STRING, allowNull: true },
      languages: { type: DataTypes.JSON, allowNull: true },
      currencies: { type: DataTypes.JSON, allowNull: true },
      capital: { type: DataTypes.STRING, allowNull: true },
      flag_url: { type: DataTypes.STRING, allowNull: true },
      google_map_url: { type: DataTypes.STRING, allowNull: true },
      openstreet_map_url: { type: DataTypes.STRING, allowNull: true },
      timezone: { type: DataTypes.STRING, allowNull: true },
      continent: { type: DataTypes.STRING, allowNull: true },
      latitude: { type: DataTypes.DECIMAL(10, 7), allowNull: true },
      longitude: { type: DataTypes.DECIMAL(10, 7), allowNull: true },
      population: { type: DataTypes.BIGINT, allowNull: true },
      landlocked: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    {
      sequelize,
      modelName: "countries",
    }
  );

  return Country;
};
