import express from "express";
import { loginWithPassword } from "../../controllers/auth/login.controller.js";

const router = express.Router();

// POST /api/auth/login
router.post("/", loginWithPassword);

export default router;