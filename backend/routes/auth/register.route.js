import express from "express";
import { registerUser } from "../../controllers/auth/register.controller.js";

const router = express.Router();

// POST /api/auth/register
router.post("/", registerUser);

export default router;