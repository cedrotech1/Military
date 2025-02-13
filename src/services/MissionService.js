import { Sequelize } from 'sequelize';
import db from "../database/models/index.js";
const users = db["Users"];
const Mission = db["Missions"];
const Notifications = db["Notifications"];
const ProfileCategories = db["ProfileCategories"];
const Missions = db["Missions"];
const Appointments = db["Appointments"];
export const getOneMissionWithDetails = async (id) => {
  try {
    const info = await Mission.findByPk(id,{
      include: [
        {
          model: users,
          as: "creator",
        },
        {
          model:Appointments,
          as:"appointments"
        }

      ],

    });

    return info;
  } catch (error) {
    console.error("Error fetching all restaurants with users:", error);
    throw error;
  }
};

export const getAllMissiones = async () => {
  try {
    const Info = await Mission.findAll({
      include: [
        {
          model: users,
          as: "creator",
        },
        {
          model:Appointments,
          as:"appointments"
        }

      ],
    });

    return Info;
  } catch (error) {
    console.error("Error fetching profile details for user:", error);
    throw error;
  }
};




export const createMission = async (MissionData) => {
  try {
    return await Mission.create(MissionData);
  } catch (error) {
    throw new Error(`Error creating Mission: ${error.message}`);
  }
};

export const checkExistingMission = async (name) => {
  return await Mission.findOne({
    where: {
      name,
    },
  });
};

// export const getAllMissiones = async () => {
//   return await MissionModel.findAll();
// };

export const deleteOneMission = async (id) => {
  const restToDelete = await Mission.findOne({ where: { id } });
  if (restToDelete) {
    await Mission.destroy({ where: { id } });
    return restToDelete;
  }
  return null;
};


export const updateOne = async (id, data) => {
  const dataToUpdate = await Mission.findOne({ where: { id } });
  if (dataToUpdate) {
    await Mission.update(data, { where: { id } });
    return data;
  }
  return null;
};

export const activate = async (id) => {
  const restoToUpdate = await Mission.findOne({ where: { id } });
  if (restoToUpdate) {
   const updatedone= await Mission.update({ status: 'active' }, { where: { id } });
    return updatedone;
  }
  return null;
};

export const deactivate = async (id) => {
  const restoToUpdate = await Mission.findOne({ where: { id } });
  if (restoToUpdate) {
    await Mission.update({ status: 'inactive' }, { where: { id } });
    return restoToUpdate;
  }
  return null;
};

