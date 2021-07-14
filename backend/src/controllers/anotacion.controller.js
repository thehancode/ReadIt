const UsuarioLibro = require("../models/usuariolibros");

const createAnotacion = async (req, res) => {
  const anotacion = new Anotacion(req.body);
  const savedAnotacion = await anotacion.save();
  res.json(savedAnotacion);
};

const getAnotaciones = async (req, res) => {
  // retorna una lista de todos los libros que ha leido el usuario
  UsuarioLibro.find({
    idUsuario: req.params.id,
  })
    .populate("idLibro")
    .exec(function (err, elemento) {
      if (err) return handleError(err);
      res.status(200).send(elemento);
    });
};

const updateAnotacion = async (req, res) => {
  const libroUpdated = await UsuarioLibro.update(
    { idUsuario: req.body.idUsuario, idLibro: req.body.idLibro },
    { $pull: { anotaciones: { idAnotacion: req.params.id } } },
    { new: true, upsert: true }
  );
  return res.json(libroUpdated);
};

module.exports = {
  createAnotacion,
  getAnotaciones,
  updateAnotacion,
};
