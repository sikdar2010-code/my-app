// middleware/security/rateLimit.js

import rateLimit from "express-rate-limit";

export const applyRateLimit = (app) => {
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100,
    message: "Too many requests, try again later 🚫",
  });

  app.use(limiter);
};