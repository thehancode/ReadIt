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

module.exports = {
  createAnotacion,
  getAnotaciones,
};
