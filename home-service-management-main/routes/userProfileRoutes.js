import { createUserProfile } from "../controllers/userProfile.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

// POST /api/users/profile
router.post('/userProfileDetails', authMiddleware, createUserProfile);

export default router;