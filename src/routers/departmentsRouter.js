import express from "express";
import {
  addDepartmentController,
  DepartmentWithAllController,
  deleteOneDepartmentController,
  getOneDepartmentController,
  updateOneDepartmentController,
  getMydepartment

} from "../controllers/departmentController.js"; // Update the import for the CategoriesController
import { protect } from "../middlewares/protect.js";

const router = express.Router();

router.delete("/delete/:id",protect, deleteOneDepartmentController);
router.post("/add/",protect, addDepartmentController);
router.get("/", protect,DepartmentWithAllController);
router.get("/all",protect,  DepartmentWithAllController);
router.get("/one/:id",protect, getOneDepartmentController);
router.get("/user",protect, getMydepartment);
router.put("/:id",protect, updateOneDepartmentController);


export default router;
