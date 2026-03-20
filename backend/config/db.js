import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// ================= PATH FIX =================
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ================= ENV LOAD =================
dotenv.config({ path: path.resolve(__dirname, "../.env") });

// ================= ENV CHECK =================
console.log("ENV CHECK:", process.env.MONGO_URI);

// ================= DB CONNECT =================
export const connectDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // fast fail
    });

    // 🔥 Ping test (DB alive check)
    await mongoose.connection.db.admin().command({ ping: 1 });

    console.log(`MongoDB connected: ${conn.connection.host} ✅`);

    // ================= CONNECTION EVENTS =================

    mongoose.connection.on("connected", () => {
      console.log("Mongoose connected 🟢");
    });

    mongoose.connection.on("error", (err) => {
      console.error("Mongoose error 🔴:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose disconnected 🟡");
    });

  } catch (error) {
    console.error("MongoDB connection error ❌:", error.message);
    process.exit(1);
  }
};