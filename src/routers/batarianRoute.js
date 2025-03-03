import express from "express";
import {
  createBatarian,
  getAllBatarians,
  getOneBatarian,
  updateBatarian,
  deleteBatarian
} from "../controllers/batarianController.js"; 
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.delete("/delete/:id", protect, deleteBatarian);
router.post("/add/", protect, createBatarian);
router.get("/", protect, getAllBatarians);
router.get("/one/:id", protect, getOneBatarian);
router.put("/:id", protect, updateBatarian);

export default router;
