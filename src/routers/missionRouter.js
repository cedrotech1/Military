import express from "express";
import {
  addMissionController,
  MissionWithAllController,
  deleteOneMissionController,
  getOneMissionController,
  updatemissionController,
  activateMissionController,
  deactivateMissionController,
  MissionCountries,
  CountriesHasmissions
  

} from "../controllers/MissionController.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.delete("/delete/:id", protect, deleteOneMissionController);
router.post("/add/", protect, addMissionController);
router.get("/", protect, MissionWithAllController);
router.get("/countries", protect, MissionCountries);
router.get("/countries/all", protect, CountriesHasmissions);
router.get("/all", protect, MissionWithAllController);
router.get("/one/:id", protect, getOneMissionController);
router.put("/update/:id", protect, updatemissionController);
router.put("/activate/:id", protect, activateMissionController);
router.put("/disactivate/:id", protect, deactivateMissionController);

export default router;
