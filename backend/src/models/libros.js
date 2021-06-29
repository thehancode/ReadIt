const mongoose = require("mongoose");

const libroSchema = new mongoose.Schema(
  {
    nombreLibro: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    autor: {
      type: String,
      required: true,
    },
    urlLibro: {
      type: String,
      required: true,
    },
    urlImagen: {
      type: String,
      required: true,
    },
    valoracion: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Libro", libroSchema);
