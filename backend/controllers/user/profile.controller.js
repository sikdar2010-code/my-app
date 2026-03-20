import User from "../../models/User.js";

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { ...req.body, profileCompleted: true },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getMe = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};