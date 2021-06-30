const mongoose = require("mongoose");

const usuarioLibrochema = new mongoose.Schema(
  {
    idUsuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    idLibro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Libro",
    },
    ultimaPagina: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("UsuarioLibro", usuarioLibrochema);
