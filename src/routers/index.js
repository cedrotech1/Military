import express from 'express';

import docrouter from '../documentation/index.doc.js';
import userRouter from './userRouter.js';
import authRouter from './authRouter.js';
import ProfileDetails from './ProfileDetailsRouter.js';
import CategoriesRouter from './categoriesRouter.js';
import mission from './missionRouter.js';
import appoitment from './appoitmentRouter.js';
import notification from './notificationRouter.js';
import statistics from './statisticsRoutes.js';
import Department from './departmentsRouter.js';

const router = express.Router();

router.use('/docs', docrouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/profile', ProfileDetails);
router.use('/categories', CategoriesRouter);
router.use('/mission', mission);
router.use('/appoitment', appoitment);
router.use('/department', Department);
router.use('/notification', notification);
router.use('/statistics', statistics);


export default router;
