import { Sequelize } from 'sequelize';
import db from "../database/models/index.js";
const users = db["Users"];
const ProfileDetails = db["ProfileDetails"];
const Notifications = db["Notifications"];
const ProfileCategories = db["ProfileCategories"];
const Missions = db["Missions"];
const Appointments = db["Appointments"];
export const getOneProfileDetailsWithDetails = async (id,userID) => {
  try {
    const info = await ProfileDetails.findByPk(id,{
      where: { userID },
      include: [
        {
          model: ProfileCategories,
          as: "category",
        }
      ],

    });

    return info;
  } catch (error) {
    console.error("Error fetching all restaurants with users:", error);
    throw error;
  }
};

export const getAllProfileDetailses = async (userID) => {
  try {
    const Info = await ProfileDetails.findAll({
      where: { userID }, // Filter by logged-in user's ID
      include: [
        {
          model: ProfileCategories,
          as: "category",
        }
      ],
    });

    return Info;
  } catch (error) {
    console.error("Error fetching profile details for user:", error);
    throw error;
  }
};




export const createProfileDetails = async (ProfileDetailsData) => {
  try {
    return await ProfileDetails.create(ProfileDetailsData);
  } catch (error) {
    throw new Error(`Error creating ProfileDetails: ${error.message}`);
  }
};

export const checkExistingProfileDetails = async (name) => {
  return await ProfileDetails.findOne({
    where: {
      name,
    },
  });
};

// export const getAllProfileDetailses = async () => {
//   return await ProfileDetailsModel.findAll();
// };

export const deleteOneProfileDetails = async (id) => {
  const restToDelete = await ProfileDetails.findOne({ where: { id } });
  if (restToDelete) {
    await ProfileDetails.destroy({ where: { id } });
    return restToDelete;
  }
  return null;
};


export const updateOne = async (id, data) => {
  const dataToUpdate = await ProfileDetails.findOne({ where: { id } });
  if (dataToUpdate) {
    await ProfileDetails.update(data, { where: { id } });
    return data;
  }
  return null;
};

export const activate = async (id) => {
  const restoToUpdate = await ProfileDetails.findOne({ where: { id } });
  if (restoToUpdate) {
   const updatedone= await ProfileDetails.update({ status: 'active' }, { where: { id } });
    return updatedone;
  }
  return null;
};

export const deactivate = async (id) => {
  const restoToUpdate = await ProfileDetails.findOne({ where: { id } });
  if (restoToUpdate) {
    await ProfileDetails.update({ status: 'inactive' }, { where: { id } });
    return restoToUpdate;
  }
  return null;
};

