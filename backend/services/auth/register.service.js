import User from "../../models/User.js";
import bcrypt from "bcryptjs";

import { generateOTP } from "../../utils/otp/generate.js";
import { otpExpiry } from "../../utils/otp/expiry.js";
import { sendSMS } from "../../utils/sms/sendSMS.js";

export const registerService = async ({ email, phone, password }) => {
  if (!email && !phone) {
    throw new Error("Email or phone required");
  }

  let user = await User.findOne({
    $or: [{ email }, { phone }],
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
      otpExpiry: expiry,
    });
  } else {
    user.otp = otp;
    user.otpExpiry = expiry;

    if (password) {
      user.password = hashedPassword;
    }
  }

  await user.save();

  await sendSMS(phone, `Your OTP is ${otp}`);

  return {
    msg: "OTP sent",
    otp, // ⚠️ production এ remove করবেন
  };
};