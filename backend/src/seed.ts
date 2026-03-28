import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import User from "./models/user.model";

dotenv.config();

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);

    const hashed = await bcrypt.hash("123456", 10);

    await User.deleteMany({ email: "test@gmail.com" });

    await User.create({
      name: "Soumik",
      email: "test@gmail.com",
      password: hashed,
    });

    console.log("? User created with hashed password");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

run();
