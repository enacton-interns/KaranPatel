import { ticket } from "../controllers/ticket.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import express from "express";

const router = express.Router();

router.post("/ticket", authMiddleware, ticket); // Ensure authMiddleware is applied

export default router;