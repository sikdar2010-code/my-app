import express from "express";

import registerRoute from "./auth/register.route.js";
import verifyRoute from "./auth/verify.route.js";
import loginRoute from "./auth/login.route.js";

const router = express.Router();

// final endpoints:
router.use("/register", registerRoute);
router.use("/verify", verifyRoute);
router.use("/login", loginRoute);

export default router;