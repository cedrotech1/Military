import db from "../database/models/index.js";
const Skills = db["Skills"];
export const createSkill = async (req, res) => {
  try {
    const { name } = req.body;

    // Validation: Check if 'name' is provided
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    // Check if skill with the same name already exists (optional, depending on business logic)
    const existingSkill = await Skills.findOne({ where: { name: name.toUpperCase() } });
    if (existingSkill) {
      return res.status(409).json({
        success: false,
        message: "Skill with this name already exists",
      });
    }

    req.body.name = name.toUpperCase(); // Normalize name
    const newSkill = await Skills.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Skill created successfully",
      skill: newSkill,
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

// Get all skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skills.findAll();
    return res.status(200).json({
      success: true,
      message: "Skills retrieved successfully",
      data: skills,
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

// Get one skill by ID
export const getOneSkill = async (req, res) => {
  try {
    const { id } = req.params;

    // Validation: Check if 'id' is provided and valid
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid skill ID",
      });
    }

    const skill = await Skills.findByPk(id);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Skill retrieved successfully",
      skill: skill,
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

// Update a skill
export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Validation: Check if 'id' is valid
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid skill ID",
      });
    }

    // Validation: Check if 'name' is provided
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    // Check if skill exists
    const skill = await Skills.findByPk(id);
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    // Check if the updated name already exists (optional, depending on business logic)
    const existingSkill = await Skills.findOne({ where: { name: name.toUpperCase() } });
    if (existingSkill && existingSkill.id !== id) {
      return res.status(409).json({
        success: false,
        message: "Skill with this name already exists",
      });
    }

    req.body.name = name.toUpperCase(); // Normalize name
    await skill.update(req.body);

    return res.status(200).json({
      success: true,
      message: "Skill updated successfully",
      skill: skill,
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

// Delete a skill
export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;

    // Validation: Check if 'id' is valid
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid skill ID",
      });
    }

    // Check if the skill exists
    const skill = await Skills.findByPk(id);
    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    await skill.destroy();

    return res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
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
