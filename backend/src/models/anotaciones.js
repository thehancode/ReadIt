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
      type: String,
    },
    descripcion: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Anotaciones", anotacionSchema);
