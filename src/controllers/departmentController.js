import db from "../database/models/index.js";

const Department = db.Departments;
const Batarians = db.Batarians;
// Create a new department
export const createDepartment = async (req, res) => {
  try {
    const { name, description, readerId } = req.body; // Removed `batarianId`
    const department = await Department.create({ name, description, readerId });
    return res.status(201).json({ message: "Department created successfully", department });
  } catch (error) {
    return res.status(500).json({ message: `Error creating department: ${error.message}` });
  }
};

// Get all departments
export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll({ include: ["members", "reader"] }); // Removed `batarian`
    return res.status(200).json(departments);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching departments: ${error.message}` });
  }
};


// Get a single department by ID..
export const getOneDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id, { include: ["members", "reader"] }); // Removed `batarian`
    if (!department) return res.status(404).json({ message: "Department not found" });
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching department: ${error.message}` });
  }
};

// Get the department of the logged-in user
export const MyDepartment = async (req, res) => {
  try {
    const { departmentId } = req.user; // Correcting how departmentId is accessed
    if (!departmentId) return res.status(200).json([]); // Return empty array if departmentId is null or undefined

    const department = await Department.findByPk(departmentId, {
      include: ["members", "reader"], // Removed `batarian`
    });

    if (!department) return res.status(200).json([]); // Return empty array if department is not found

    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching department: ${error.message}` });
  }
};


export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the department exists
    const department = await Department.findByPk(id);
    if (!department) {
      return res.status(404).json({ message: "Department not found" });
    }

    // Delete all Batarians associated with the department
    await Batarians.destroy({ where: { departmentId: id } });

    // Now delete the department
    await department.destroy();

    return res.status(200).json({ message: "Department and all associated Batarians deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Error deleting department: ${error.message}` });
  }
};
