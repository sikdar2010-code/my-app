import express from "express";
import { applySecurityMiddleware } from "./middleware/security/index.js";
import routes from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/error/index.js";

const app = express();

// middleware
applySecurityMiddleware(app);

// routes
app.use("/api", routes);

// health check
app.get("/", (req, res) => {
  res.json({ message: "API running 🚀" });
});

// error
app.use(notFound);
app.use(errorHandler);

export default app;