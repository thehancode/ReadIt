const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    correo: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
    },
    edad: {
      type: Number,
    },
    timer: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Usuario", usuarioSchema);
