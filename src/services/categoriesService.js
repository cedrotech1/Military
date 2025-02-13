import db from "../database/models/index.js";
const users = db["Users"];
const ProfileDetails = db["ProfileDetails"];
const Notifications = db["Notifications"];
const ProfileCategories = db["ProfileCategories"];
const Missions = db["Missions"];
const Appointments = db["Appointments"];


export const createCategory = async (categoryData) => {
  try {
    return await ProfileCategories.create(categoryData);
  } catch (error) {
    throw new Error(`Error creating Category: ${error.message}`);
  }
};

export const checkExistingCategory = async (name) => {
  return await ProfileCategories.findOne({
    where: {
      name,
    },
  });
};



export const getAllCategories = async () => {
  try {
    const cards = await ProfileCategories.findAll();
    return cards;
  } catch (error) {
    console.error("Error fetching all cards with categories:", error);
    throw error;
  }
};

export const deleteOneCategory = async (id) => {
  const categoryToDelete = await ProfileCategories.findOne({ where: { id } });
  if (categoryToDelete) {
    await ProfileCategories.destroy({ where: { id } });
    return categoryToDelete;
  }
  return null;
};

export const updateOneCategory = async (id, category) => {
  const categoryToUpdate = await ProfileCategories.findOne({ where: { id, restaurent } });
  if (categoryToUpdate) {
    await ProfileCategories.update(category, { where: { id } });
    return category;
  }
  return null;
};


export const getOneCategoryWithDetails = async (id) => {
  try {
    const cards = await ProfileCategories.findByPk(id);

    return cards;
  } catch (error) {
    console.error("Error fetching all:", error);
    throw error;
  }
};



export const getcategory = async (id) => {
  const allcategory = await ProfileCategories.findAll({
    where: {
      id,
    
    }
 
  });
  return allcategory;
};

// activatecategory