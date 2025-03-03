import db from "../database/models/index.js";

const Department = db.Departments;



// Create a new department
export const createDepartment = async (req, res) => {
  try {
    const { name, description, readerId, batarianId } = req.body;
    const department = await Department.create({ name, description, readerId, batarianId });
    return res.status(201).json({ message: "Department created successfully", department });
  } catch (error) {
    return res.status(500).json({ message: `Error creating department: ${error.message}` });
  }
};

// Get all departments
export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.findAll({ include: ["members", "reader", "batarian"] });
    return res.status(200).json(departments);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching departments: ${error.message}` });
  }
};

// Get a single department by ID
export const getOneDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id, { include: ["members", "reader", "batarian"] });
    if (!department) return res.status(404).json({ message: "Department not found" });
    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching department: ${error.message}` });
  }
};

export const MyDepartment = async (req, res) => {
  try {
    const { departmentId } = req.user; // Correcting how departmentId is accessed
    if (!departmentId) return res.status(200).json([]); // Return empty array if departmentId is null or undefined

    const department = await Department.findByPk(departmentId, {
      include: ["members", "reader", "batarian"],
    });

    if (!department) return res.status(200).json([]); // Return empty array if department is not found

    return res.status(200).json(department);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching department: ${error.message}` });
  }
};




// Delete a department
export const deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findByPk(id);
    if (!department) return res.status(404).json({ message: "Department not found" });
    await department.destroy();
    return res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Error deleting department: ${error.message}` });
  }
};
