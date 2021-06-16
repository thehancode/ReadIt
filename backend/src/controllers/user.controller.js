const User = require("../models/users");
const jwt = require("jsonwebtoken");
const config = require("../config");

const login = async (req, res) => {
  const userFound = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!userFound) {
    return res.status(404).send({ message: "Usuario no encontrado." });
  }
  console.log(userFound.id);
  var token = jwt.sign({ id: userFound.id }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({
    id: userFound._id,
    username: userFound.username,
    password: userFound.password,
    accessToken: token,
  });
};

const createUser = async (req, res) => {
  const userFound = await User.findOne({ username: req.body.username });
  if (userFound)
    return res.status(404).json({ message: "El usuario ya existe" });

  const user = new User(req.body);
  const savedUser = await user.save();
  res.json(savedUser);
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (error) {
    res.json(error);
  }
};

const getUser = async (req, res) => {
  const userFound = await User.findById(req.params.id);
  if (!userFound) return res.status(204).json();
  return res.json(userFound);
};

const deleteUser = async (req, res) => {
  const userFound = await User.findByIdAndDelete(req.params.id);
  if (!userFound) return res.status(204).json();
  return res.json(userFound);
};

const updateUser = async (req, res) => {
  const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!userUpdated) return res.status(204).json();
  return res.json(userUpdated);
};

module.exports = {
  login,
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};
