import express from "express";
import {
  createSkill,
  getAllSkills,
  getOneSkill,
  updateSkill,
  deleteSkill

} from "../controllers/skillsController.js"; // Update the import for the CategoriesController
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.delete("/delete/:id",protect, deleteSkill);
router.post("/add/",protect, createSkill);
router.get("/", protect,getAllSkills);
router.get("/one/:id",protect, getOneSkill);
router.put("/:id",protect, updateSkill);


export default router;
