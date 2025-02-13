"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProfileDetails extends Model {
    static associate(models) {
      ProfileDetails.belongsTo(models.Users, { foreignKey: "userID", as: "user" });
      ProfileDetails.belongsTo(models.ProfileCategories, { foreignKey: "categoryID", as: "category" });
    }
  }
  ProfileDetails.init(
    {
      userID: DataTypes.INTEGER,
      categoryID: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProfileDetails",
    }
  );
  return ProfileDetails;
};
