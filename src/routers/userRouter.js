import express from 'express';
import path from 'path';
import fs from 'fs';

import multer from 'multer';
import {
  addUser,
  deleteOneUser,
  getAllUsers,
  getOneUser,
  updateOneUser,
  activateOneUser,
  deactivateOneUser,
  changePassword,
  checkEmail,
  checkCode,
  ResetPassword,
  getUsersWithoutAppointments,
  processAddUsers,
  getAllUsers11,
  getSordiers1,
  getUserssor1,
  getUsersFromBatarian,
  uploadExcel,
} from '../controllers/userController.js';
import { protect } from '../middlewares/protect.js';

const router = express.Router();


router.post('/upload-excel', processAddUsers);

// router.get('/upload/file', upload1.single('file'),express.json(),processAddUsers);
router.get('/formission', protect, getUsersWithoutAppointments);
router.get('/', protect, getAllUsers);
router.get('/batarian/:id', protect, getUsersFromBatarian);
router.get('/user', protect, getUserssor1);
router.get('/sordire', protect, getSordiers1);

router.get('/com', protect, getAllUsers11);
router.get('/:id', protect, getOneUser);
router.post('/addUser', protect, addUser);
router.put('/update/:id', protect, updateOneUser);
router.delete('/delete/:id', protect, deleteOneUser);
router.put('/activate/:id', protect, activateOneUser);
router.put('/deactivate/:id', protect, deactivateOneUser);
router.put('/changePassword', protect, changePassword);

router.post('/check', checkEmail);
router.post('/code/:email', checkCode);
router.put('/resetPassword/:email', ResetPassword);

export default router;
