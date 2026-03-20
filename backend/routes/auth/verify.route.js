import express from "express";
import { verifyOTP } from "../../controllers/auth/verify.controller.js";

const router = express.Router();

// POST /api/auth/verify
router.post("/", verifyOTP);

export default router;