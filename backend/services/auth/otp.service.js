import User from "../../models/User.js";
import jwt from "jsonwebtoken";

export const verifyService = async ({ phone, email, otp }) => {
  const user = await User.findOne({
    $or: [{ phone }, { email }],
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.otp !== otp) {
    throw new Error("Invalid OTP");
  }

  if (user.otpExpiry < new Date()) {
    throw new Error("OTP expired");
  }

  user.isVerified = true;
  user.otp = null;

  await user.save();

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  return {
    msg: "Login successful",
    token,
    user,
  };
};