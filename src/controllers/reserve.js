import db from "../database/models/index.js";
const SordierSkills = db["SordierSkills"];
export const createSordierSkill = async (req, res) => {
  try {
    const { skillsID, name, description, image, status } = req.body;
    const userID = req.user.id; // Getting the logged-in user's ID

    const newSkill = await SordierSkills.create({
      userID,
      skillsID,
      name,
      description,
      image,
      status,
    });

    return res.status(201).json(newSkill);
  } catch (error) {
    return res.status(500).json({ message: `Error creating skill: ${error.message}` });
  }
};

// Get all skills (Admin or public access)
export const getAllSordierSkills = async (req, res) => {
  try {
    const skills = await SordierSkills.findAll({ include: ["user", "skill"] });
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching skills: ${error.message}` });
  }
};

// Get a specific skill by ID
export const getSordierSkillById = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await SordierSkills.findByPk(id, { include: ["user", "skill"] });

    if (!skill) return res.status(404).json({ message: "Skill not found" });

    return res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching skill: ${error.message}` });
  }
};

// Update a skill
export const updateSordierSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skillsID, name, description, image, status } = req.body;

    const skill = await SordierSkills.findByPk(id);
    if (!skill) return res.status(404).json({ message: "Skill not found" });

    await skill.update({ skillsID, name, description, image, status });

    return res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({ message: `Error updating skill: ${error.message}` });
  }
};

// Delete a skill
export const deleteSordierSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await SordierSkills.findByPk(id);

    if (!skill) return res.status(404).json({ message: "Skill not found" });

    await skill.destroy();
    return res.status(200).json({ message: "Skill deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: `Error deleting skill: ${error.message}` });
  }
};

// Get logged-in user's skills
export const getMySkills = async (req, res) => {
  try {
    const userID = req.user.id; // Get logged-in user ID
    const skills = await SordierSkills.findAll({
      where: { userID },
      include: ["skill"], // Include skill details
    });

    return res.status(200).json(skills.length ? skills : []);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching your skills: ${error.message}` });
  }
};
