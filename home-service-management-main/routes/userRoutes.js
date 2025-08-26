import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';

import { registerUser, loginUser, logoutUser, getCurrentUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authMiddleware, logoutUser);
router.get('/profile', authMiddleware, getCurrentUser);

export default router;
