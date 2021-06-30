const Libro = require("../models/libros");

const createLibro = async (req, res) => {
  const libro = new Libro(req.body);
  const savedLibro = await libro.save();
  res.json(savedLibro);
};

const getLibros = async (req, res) => {
  /*{
    nombreLibro: { $regex: `.*${req.body.nombreLibro}.*` },
    descripcion: { $regex: `.*${req.body.descripcion}.*` },
  } */
  Libro.find()
    .limit(10)
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
  createLibro,
  getLibros,
  getLibro,
  deleteLibro,
  updateLibro,
};
