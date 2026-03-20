import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    console.log("⏳ Connecting DB...");
    await connectDB();
    console.log("✅ DB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on ${PORT}`);
    });

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();