import User from "../models/users";

export const createUser = async (req, res) => {
  const userFound = await User.findOne({ url: req.body.url });
  if (userFound)
    return res.status(301).json({ message: "The URL already exists" });

  const user = new User(req.body);
  const savedUser = await user.save();
  res.json(savedUser);
};
