import { Sequelize } from 'sequelize';
import db from "../database/models/index.js";
const SordierSkills = db["SordierSkills"];
const Skills = db["Skills"];
export const getOneSordierSkillsWithDetails = async (id,userID) => {
  try {
    const info = await SordierSkills.findByPk(id);

    return info;
  } catch (error) {
    console.error("Error fetching all restaurants with users:", error);
    throw error;
  } 
};

export const getAllSordierSkillses = async (userID) => {
  try {
    const Info = await SordierSkills.findAll({
      where: { userID }, // Filter by logged-in user's ID
      include: [
        {
          model: Skills,
          as: "sordierSkills1",
        }
      ],
    });

    return Info;
  } catch (error) {
    console.error("Error fetching profile details for user:", error);
    throw error;
  }
};




export const checkExistingSordierSkills = async (name) => {
  return await SordierSkills.findOne({
    where: {
      name,
    },
  });
};

// export const getAllSordierSkillses = async () => {
//   return await SordierSkillsModel.findAll();
// };

export const deleteOneSordierSkills = async (id) => {
  const restToDelete = await SordierSkills.findOne({ where: { id } });
  if (restToDelete) {
    await SordierSkills.destroy({ where: { id } });
    return restToDelete;
  }
  return null;
};


export const updateOne = async (id, data) => {
  const dataToUpdate = await SordierSkills.findOne({ where: { id } });
  if (dataToUpdate) {
    await SordierSkills.update(data, { where: { id } });
    return data;
  }
  return null;
};

export const activate = async (id) => {
  const restoToUpdate = await SordierSkills.findOne({ where: { id } });
  if (restoToUpdate) {
   const updatedone= await SordierSkills.update({ status: 'active' }, { where: { id } });
    return updatedone;
  }
  return null;
};

export const deactivate = async (id) => {
  const restoToUpdate = await SordierSkills.findOne({ where: { id } });
  if (restoToUpdate) {
    await SordierSkills.update({ status: 'inactive' }, { where: { id } });
    return restoToUpdate;
  }
  return null;
};

