export const validateVerify = (req, res, next) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({
      success: false,
      message: "Phone and OTP are required"
    });
  }

  if (otp.length !== 6) {
    return res.status(400).json({
      success: false,
      message: "OTP must be 6 digits"
    });
  }

  next();
};