export const validateRegister = (req, res, next) => {
  const { phone } = req.body;

  // phone check
  if (!phone) {
    return res.status(400).json({
      success: false,
      message: "Phone number is required"
    });
  }

  // basic format check (optional)
  if (phone.length < 10) {
    return res.status(400).json({
      success: false,
      message: "Invalid phone number"
    });
  }

  next();
};