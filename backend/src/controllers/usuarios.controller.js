const Usuario = require("../models/usuarios");
const jwt = require("jsonwebtoken");
const config = require("../config");
var bcrypt = require("bcryptjs");

const login = async (req, res) => {
  const usuarioFound = await Usuario.findOne({
    username: req.body.username,
  });
  console.log(usuarioFound);
  if (!usuarioFound) {
    return res.status(404).send({ message: "Usuario no encontrado." });
  }

  var passwordIsValid = bcrypt.compareSync(
    req.body.password,
    usuarioFound.password
  );

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Contraseña inválida!",
    });
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
  });
};

const createUsuario = async (req, res) => {
  const usuarioFound = await Usuario.findOne({ username: req.body.username });
  if (usuarioFound)
    return res.status(404).json({ message: "El usuario ya existe" });
  const usuario = new Usuario({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    timer: 1500,
  });

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
  const usuario = new Usuario({
    _id: req.params.id,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    correo: req.body.correo,
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    timer: req.body.timer,
  });
  console.log(usuario);

  const usuarioUpdated = await Usuario.findByIdAndUpdate(
    req.params.id,
    usuario,
    {
      new: true,
    }
  );

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
