"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SordierSkills extends Model {
    static associate(models) {
      SordierSkills.belongsTo(models.Users, { foreignKey: "userID", as: "user" });
      SordierSkills.belongsTo(models.Skills, { foreignKey: "skillsID", as: "skill" }); // Fix the association
    }
  }
  SordierSkills.init(
    { 
      userID: DataTypes.INTEGER,
      skillsID: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "SordierSkills",
    }
  );
  return SordierSkills;
};
