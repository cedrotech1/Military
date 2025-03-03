import express from "express";
import {
  addAppoitmentController,
  AppoitmentWithAllController,
  deleteOneAppoitmentController,
  getOneAppoitmentController,
  changeAppoitmentController,
  getMyAppoitment,
  assignAppointments
  

} from "../controllers/AppoitmentController.js";
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.post("/assign", protect, assignAppointments);
router.delete("/delete/:id", protect, deleteOneAppoitmentController);
router.post("/add/", protect, addAppoitmentController);
router.get("/", protect, AppoitmentWithAllController);
router.get("/all", protect, AppoitmentWithAllController);
router.get("/one/:id", protect, getOneAppoitmentController);
router.get("/user", protect, getMyAppoitment);
router.put("/change/:id", protect, changeAppoitmentController);


export default router;
