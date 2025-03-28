import db from "../database/models/index.js";
const Skills = db["Skills"];
const Batarians = db["Batarians"];
const Users = db["Users"];
const Departments=db["Departments"];


export const getBatarianWithUsers = async (req, res) => {
  try {
    const batarians = await Batarians.findAll({
      include: [
        {
          model: Users,
          as: "users",  // Make sure this matches the alias you defined in the model associations
          attributes: ["id", "firstname", "lastname", "email", "phone"], // Customize the fields you want to include
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: batarians,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch Batarians with users',
    });
  }
};



// Create a new Batarian
export const createBatarian = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: "Name is required" });
    }

    const existingBatarian = await Batarians.findOne({ where: { name: name.toUpperCase() } });
    if (existingBatarian) {
      return res.status(409).json({ success: false, message: "Batarian with this name already exists" });
    }

    req.body.name = name.toUpperCase();
    const newBatarian = await Batarians.create(req.body);

    return res.status(201).json({ success: true, message: "Batarian created successfully", batarian: newBatarian });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
  }
};
   const { Op, Sequelize } = require("sequelize");


// import { Sequelize } from "sequelize";

// Get all Batarians with their corresponding Departments
export const getAllBatarians = async (req, res) => {
  try {
 
    const batarians = await Batarians.findAll({
      include: [
        {
          model: Departments,
          as: "department",
          attributes: ["id", "name"],
        }
      ],
    });
    
    

    if (batarians.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No batarians found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Batarians retrieved successfully",
      data: batarians,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};



// Get one Batarian by ID
export const getOneBatarian = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ success: false, message: "Invalid Batarian ID" });
    }

    const batarian = await Batarians.findByPk(id,{
      include: [
        {
          model: Departments, 
          as: "department",
          attributes: ["id", "name"],
        }
      ],
    });

    if (!batarian) {
      return res.status(404).json({ success: false, message: "Batarian not found" });
    }

    return res.status(200).json({ success: true, message: "Batarian retrieved successfully", batarian });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
  }
};

// Update a Batarian
export const updateBatarian = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({ success: false, message: "Invalid Batarian ID" });
    }

    if (!name) {
      return res.status(400).json({ success: false, message: "Name is required" });
    }

    const batarian = await Batarians.findByPk(id);
    if (!batarian) {
      return res.status(404).json({ success: false, message: "Batarian not found" });
    }

    const existingBatarian = await Batarians.findOne({ where: { name: name.toUpperCase() } });
    if (existingBatarian && existingBatarian.id !== id) {
      return res.status(409).json({ success: false, message: "Batarian with this name already exists" });
    }

    req.body.name = name.toUpperCase();
    await batarian.update(req.body);

    return res.status(200).json({ success: true, message: "Batarian updated successfully", batarian });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
  }
};

// Delete a Batarian
export const deleteBatarian = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({ success: false, message: "Invalid Batarian ID" });
    }

    const batarian = await Batarians.findByPk(id);
    if (!batarian) {
      return res.status(404).json({ success: false, message: "Batarian not found" });
    }

    await batarian.destroy();

    return res.status(200).json({ success: true, message: "Batarian deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Something went wrong", error: error.message });
  }
};
