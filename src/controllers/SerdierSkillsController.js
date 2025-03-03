
import db from "../database/models/index.js";
const SordierSkills = db["SordierSkills"];
import imageUploader from "../helpers/imageUplouder.js"; // Ensure this function exists

// Function to validate inputs
const validateSordierSkill = (data) => {
  let errors = {};

  if (!data.skillsID || isNaN(data.skillsID)) errors.skillsID = "Skill ID must be a valid number.";
  if (!data.name || data.name.trim() === "") errors.name = "Name is required.";
  if (data.description && typeof data.description !== "string") errors.description = "Description must be a string.";

  return errors;
};

// // Handle image upload
// const handleImageUpload = async (req) => {
//   if (req.files && req.files.image) {
//     try {
//       const image = await imageUploader(req);
//       if (!image || !image.url) throw new Error("Upload failed or image URL missing");
//       return image.url;
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       throw new Error("Image upload failed");
//     }
//   }
//   return null;
// };

// Create a new skill
export const createSordierSkill = async (req, res) => {
  try {
    const userID = req.params.id;
    let image; 
    if (req.files && req.files.image) {
      try {
        image = await imageUploader(req);
        if (!image || !image.url) {
          throw new Error('Upload failed or image URL missing');
        }
        req.body.image = image.url;
        console.log(req.body.image)
      } catch (error) {
        console.error('Error uploading image:', error);
        // Handle error appropriately
      }
    }
    // req.body.image = await handleImageUpload(req);
    const errors = validateSordierSkill(req.body);
    
    if (Object.keys(errors).length) return res.status(400).json({ errors });


    const newSkill = await SordierSkills.create({ userID, ...req.body });
    return res.status(201).json(newSkill);
  } catch (error) {
    return res.status(500).json({ message: `Error creating skill: ${error.message}` });
  }
};

// Get all skills
export const getAllSordierSkills = async (req, res) => {
  try {
    const skills = await SordierSkills.findAll({ include: ["user", "skill"] });
    return res.status(200).json(skills.length ? skills : []);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching skills: ${error.message}` });
  }
};

// Get a specific skill by ID
export const getSordierSkillById = async (req, res) => {
  try {
    const id = parseInt(req.user.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID format" });

    const skill = await SordierSkills.findAll({ where: { userID:id }, include: ["user", "skill"] });
    if (!skill) return res.status(404).json({ message: "Skill not found" });

    return res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching skill: ${error.message}` });
  }
};

export const getOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID format" });

    const skill= await SordierSkills.findAll({ where: { id:id }, include: ["skill"] });

    if (!skill) return res.status(404).json({ message: "Skill not found" });

    return res.status(200).json(skill);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching skill: ${error.message}` });
  }
};



// Delete a skill
export const deleteSordierSkill = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: "Invalid ID format" });

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
    const userID = req.user.id;
    const skills = await SordierSkills.findAll({ where: { userID }, include: ["skill"] });

    return res.status(200).json(skills.length ? skills : []);
  } catch (error) {
    return res.status(500).json({ message: `Error fetching your skills: ${error.message}` });
  }
};
