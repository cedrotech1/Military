import express from 'express';
import { getStatisticsController } from "../controllers/statisticsController.js";

import { protect } from '../middlewares/protect.js';
const router = express.Router();
router.get('/', protect, getStatisticsController);

export default router;
