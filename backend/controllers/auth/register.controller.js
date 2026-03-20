import User from "../../models/User.js";
import bcrypt from "bcryptjs";

import { generateOTP } from "../../utils/otp/generate.js";
import { otpExpiry } from "../../utils/otp/expiry.js";
import { sendSMS } from "../../utils/sms/sendSMS.js";

export const registerUser = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    if (!email && !phone) {
      return res.status(400).json({ msg: "Email or phone required" });
    }

    let user = await User.findOne({
      $or: [{ email }, { phone }]
    });

    const otp = generateOTP();
    const expiry = otpExpiry(5);

    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    if (!user) {
      user = new User({
        email,
        phone,
        password: hashedPassword,
        otp,
        otpExpiry: expiry
      });
    } else {
      user.otp = otp;
      user.otpExpiry = expiry;

      if (password) {
        user.password = hashedPassword;
      }
    }

    await user.save();

    // 📩 send SMS
    await sendSMS(phone, `Your OTP is ${otp}`);

    res.json({
      msg: "OTP sent",
      otp // ⚠️ production এ remove করবেন
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};