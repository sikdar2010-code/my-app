// middleware/security/cors.js

import cors from "cors";

export const applyCors = (app) => {
  app.use(
    cors({
      origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
      credentials: true,
    })
  );
};