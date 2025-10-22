import express from 'express';
import { login, register } from '../controllers/auth-controllers.js';
import { changePassword } from '../controllers/auth-controllers.js';
import authMiddleware from '../middleware/auth-middleware.js';
const router = express.Router();

// set up auth controllers
router.post('/login' , login)
router.post('/register' , register);
router.post('/change-password' , authMiddleware , changePassword);

export default router;