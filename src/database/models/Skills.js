"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skills extends Model {
    static associate(models) {
      Skills.hasMany(models.SordierSkills, { foreignKey: "skillsID", as: "sordierSkills1" }); // Renamed alias
    }
  }
  Skills.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Skills",
    }
  );
  return Skills;
};
