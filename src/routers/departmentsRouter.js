import express from "express";
import {
   createDepartment,
  getAllDepartments,
  getOneDepartment,
  MyDepartment,
  deleteDepartment

} from "../controllers/departmentController.js"; // Update the import for the CategoriesController
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.delete("/delete/:id",protect, deleteDepartment);
router.post("/add/",protect, createDepartment);
router.get("/", protect,getAllDepartments);
router.get("/one/:id",protect, getOneDepartment);
router.get("/user",protect, MyDepartment);


export default router;
