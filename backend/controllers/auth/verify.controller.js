import User from "../../models/User.js";
import jwt from "jsonwebtoken";

export const verifyOTP = async (req, res) => {
  try {
    const { phone, email, otp } = req.body;

    const user = await User.findOne({
      $or: [{ phone }, { email }]
    });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    if (user.otp !== otp) {
      return res.status(400).json({ msg: "Invalid OTP" });
    }

    if (user.otpExpiry < new Date()) {
      return res.status(400).json({ msg: "OTP expired" });
    }

    user.isVerified = true;
    user.otp = null;

    await user.save();

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      msg: "Login successful",
      token,
      user
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};