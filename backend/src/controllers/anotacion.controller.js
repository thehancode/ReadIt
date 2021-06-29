const Anotacion = require("../models/anotaciones");
const config = require("../config");

const createAnotacion = async (req, res) => {
  const anotacion = new Anotacion(req.body);
  const savedAnotacion = await anotacion.save();
  res.json(savedAnotacion);
};

const getLibros = async (req, res) => {
  Libro.find({
    nombreLibro: { $regex: `.*${req.body.nombreLibro}.*` },
    descripcion: { $regex: `.*${req.body.descripcion}.*` },
  })
    .limit(9)
    .exec((err, list_libros) => {
      res.status(200).send(list_libros);
    });
};

const getLibro = async (req, res) => {
  const libroFound = await Libro.findById(req.params.id);
  if (!libroFound) return res.status(204).json();
  return res.json(libroFound);
};

const deleteLibro = async (req, res) => {
  const libroFound = await Libro.findByIdAndDelete(req.params.id);
  if (!libroFound) return res.status(204).json();
  return res.json(libroFound);
};

const updateLibro = async (req, res) => {
  const libroUpdated = await Libro.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!libroUpdated) return res.status(204).json();
  return res.json(libroUpdated);
};

module.exports = {
  createAnotacion,
  getLibros,
  getLibro,
  deleteLibro,
  updateLibro,
};
