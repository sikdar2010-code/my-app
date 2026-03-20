// middleware/security/helmet.js

import helmet from "helmet";

export const applyHelmet = (app) => {
  app.use(helmet());
};