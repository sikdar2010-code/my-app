import Interest from "../../models/Interest.js";

export const sendInterest = async (req, res) => {
  const interest = await Interest.create({
    fromUser: req.user.id,
    toUser: req.body.userId,
  });

  res.json(interest);
};