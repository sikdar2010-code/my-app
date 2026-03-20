// middleware/security/index.js

import { applyHelmet } from "./helmet.js";
import { applyCors } from "./cors.js";
import { applyRateLimit } from "./rateLimit.js";
import express from "express";

export const applySecurityMiddleware = (app) => {
  // 🔐 security headers
  applyHelmet(app);

  // 🚫 rate limit
  applyRateLimit(app);

  // 🌐 cors
  applyCors(app);

  // 🧠 body parser (centralized)
  app.use(express.json({ limit: "10kb" }));
};