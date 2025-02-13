"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProfileCategories extends Model {
    static associate(models) {
      ProfileCategories.hasMany(models.ProfileDetails, { foreignKey: "categoryID", as: "profileDetails" });
    }
  }
  ProfileCategories.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProfileCategories",
    }
  );
  return ProfileCategories;
};