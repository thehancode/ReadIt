const mongoose = require("mongoose");

const anotacionSchema = new mongoose.Schema(
  {
    idUsuarioLibro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UsuarioLibro",
    },
    pagina: {
      type: Number,
    },
    fecha: {
      type: Date,
    },
    descripcion: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Anotacion", libroSchema);
