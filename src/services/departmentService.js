import db from "../database/models/index.js";
const users = db["Users"];
const Department = db["Departments"];

export const updateOneDepartment = async (id, departmentData) => {
  const departmentToUpdate = await Department.findOne({ where: { id } });
  if (departmentToUpdate) {
    await Department.update(departmentData, { where: { id } });
    return await Department.findOne({ where: { id } }); // Return updated department
  }
  return null;
};


export const createDepartment = async (DepartmentData) => {
  try {
    return await Department.create(DepartmentData);
  } catch (error) {
    throw new Error(`Error creating Department: ${error.message}`);
  }
};

export const checkExistingDepartment = async (name) => {
  return await Department.findOne({
    where: {
      name,
    },
  });
};

export const checkExistingDepartmentReader = async (readerId) => {
  return await Department.findOne({
    where: {
      readerId,
    },
  });
};



export const getAllDepartment = async () => {
  try {
    const data = await Department.findAll({
      include: [
        {
          model: users,
          as: "reader",
          attributes: { exclude: ["password"] }, // Exclude password
        },
        {
          model: users,
          as: "members",
          
        },
      ],
    });
    return data;
  } catch (error) {
    console.error("Error fetching all departments with reader:", error);
    throw error;
  }
};


export const deleteOneDepartment = async (id) => {
  const DepartmentToDelete = await Department.findOne({ where: { id } });
  if (DepartmentToDelete) {
    await Department.destroy({ where: { id } });
    return DepartmentToDelete;
  }
  return null;
};




export const getOneDepartmentWithDetails = async (id) => {
  try {
    const cards = await Department.findByPk(id,{
      include: [
        {
          model: users,
          as: "reader",
          attributes: { exclude: ["password"] }, // Exclude password
        },
        {
          model: users,
          as: "members",
          
        },
      ],
    });

    return cards;
  } catch (error) {
    console.error("Error fetching all:", error);
    throw error;
  }
};



export const getDepartment = async (id) => {
  const Department = await Department.findAll({
    where: {
      id,
    
    }
 
  });
  return Department;
};

// activateDepartment