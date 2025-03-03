import express from "express";
import {
  createSordierSkill,
  getAllSordierSkills,
  getSordierSkillById,
  getOne,
  deleteSordierSkill,
  getMySkills

} from "../controllers/SerdierSkillsController.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.delete("/delete/:id", protect, deleteSordierSkill  );
router.post("/add/:id", protect, createSordierSkill);
router.get("/", protect, getAllSordierSkills  );
router.get("/myskills", protect, getMySkills);
router.get("/one/:id", protect, getSordierSkillById);


export default router;
