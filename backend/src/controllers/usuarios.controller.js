const Usuario = require("../models/usuarios");
const jwt = require("jsonwebtoken");
const config = require("../config");

const login = async (req, res) => {
  const usuarioFound = await Usuario.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  if (!usuarioFound) {
    return res.status(404).send({ message: "Usuario no encontrado." });
  }
  console.log(usuarioFound.id);
  var token = jwt.sign({ id: usuarioFound.id }, config.SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).send({
    id: usuarioFound._id,
    username: usuarioFound.username,
    password: usuarioFound.password,
    accessToken: token,
    timer: usuarioFound.timer,
  });
};

const createUsuario = async (req, res) => {
  const usuarioFound = await Usuario.findOne({ username: req.body.username });
  if (usuarioFound)
    return res.status(404).json({ message: "El usuario ya existe" });

  const usuario = new Usuario(req.body);
  const savedUsuario = await usuario.save();
  res.json(savedUsuario);
};

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    return res.json(usuarios);
  } catch (error) {
    res.json(error);
  }
};

const getUsuario = async (req, res) => {
  const usuarioFound = await Usuario.findById(req.params.id);
  if (!usuarioFound) return res.status(204).json();
  return res.json(usuarioFound);
};

const deleteUsuario = async (req, res) => {
  const usuarioFound = await Usuario.findByIdAndDelete(req.params.id);
  if (!usuarioFound) return res.status(204).json();
  return res.json(usuarioFound);
};

const updateUsuario = async (req, res) => {
  const usuarioUpdated = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!usuarioUpdated) return res.status(204).json();
  return res.json(usuarioUpdated);
};

module.exports = {
  login,
  createUsuario,
  getUsuarios,
  getUsuario,
  deleteUsuario,
  updateUsuario,
};
