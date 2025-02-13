import express from "express";
import {
  addProfileDetailsController,
  ProfileDetailsWithAllController,
  deleteOneProfileDetailsController,
  getOneProfileDetailsController,
  updateprofile,
  activateProfileDetailsController,
  deactivateProfileDetailsController
  

} from "../controllers/ProfileDetailsController.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.delete("/delete/:id", protect, deleteOneProfileDetailsController);
router.post("/add/", protect, addProfileDetailsController);
router.get("/", protect, ProfileDetailsWithAllController);
router.get("/all", protect, ProfileDetailsWithAllController);
router.get("/one/:id", protect, getOneProfileDetailsController);
router.put("/update/:id", protect, updateprofile);
router.put("/activate/:id", protect, activateProfileDetailsController);
router.put("/disactivate/:id", protect, deactivateProfileDetailsController);

export default router;
