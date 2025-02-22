import { Sequelize, where } from 'sequelize';
import db from "../database/models/index.js";
const users = db["Users"];
const Appoitment = db["Appointments"];
const Notifications = db["Notifications"];
const Missions = db["Missions"];
const ProfileCategories = db["ProfileCategories"];

export const getOneAppoitmentWithDetails = async (id) => {
  try {
    const Info = await Appoitment.findAll({
      where: {id},
      include: [
        {
          model: users,
          as: "assigner",
        },
        {
          model:users,
          as:"user"
        },
        {
          model:Missions,
          as:"mission"
        }

      ],
    });

    return Info;
  } catch (error) {
    console.error("Error fetching profile details for user:", error);
    throw error;
  }
};

export const getmyappoitments = async (id) => {
  try {
    const Info = await Appoitment.findAll({
      where: {userID:id},
      include: [
        {
          model: users,
          as: "assigner",
        },
        {
          model:users,
          as:"user"
        },
        {
          model:Missions,
          as:"mission"
        }

      ],
    });

    return Info;
  } catch (error) {
    console.error("Error fetching profile details for user:", error);
    throw error;
  }
};

export const getAllAppoitmentes = async () => {
  try {
    const Info = await Appoitment.findAll({
      include: [
        {
          model: users,
          as: "assigner",
        },
        {
          model:users,
          as:"user"
        },
        {
          model:Missions,
          as:"mission"
        }

      ],
    });

    return Info;
  } catch (error) {
    console.error("Error fetching profile details for user:", error);
    throw error;
  }
};




export const createAppoitment = async (AppoitmentData) => {
  try {
    return await Appoitment.create(AppoitmentData);
  } catch (error) {
    throw new Error(`Error creating Appoitment: ${error.message}`);
  }
};

export const checkExistingAppoitment = async (name) => {
  return await Appoitment.findOne({
    where: {
      name,
    },
  });
};

// export const getAllAppoitmentes = async () => {
//   return await AppoitmentModel.findAll();
// };

export const deleteOneAppoitment = async (id) => {
  const restToDelete = await Appoitment.findOne({ where: { id } });
  if (restToDelete) {
    await Appoitment.destroy({ where: { id } });
    return restToDelete;
  }
  return null;
};




export const changeAppoitmentstatus = async (id,status) => {
  const restoToUpdate = await Appoitment.findOne({ where: { id } });
  if (restoToUpdate) {
   const updatedone= await Appoitment.update({ status: status }, { where: { id } });
    return updatedone;
  }
  return null;
};

export const deactivate = async (id) => {
  const restoToUpdate = await Appoitment.findOne({ where: { id } });
  if (restoToUpdate) {
    await Appoitment.update({ status: 'inactive' }, { where: { id } });
    return restoToUpdate;
  }
  return null;
};

