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
    url: {
      type: String,
      required: true,
    },
    imagen: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Libro", libroSchema);
