const UsuarioLibro = require("../models/usuariolibros");

const ObjectId = (
  m = Math,
  d = Date,
  h = 16,
  s = (s) => m.floor(s).toString(h)
) => s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));

const createAnotacion = async (req, res) => {
  const libroAdded = await UsuarioLibro.update(
    { idUsuario: req.body.idUsuario, idLibro: req.body.idLibro },
    {
      $push: {
        anotaciones: {
          $each: [
            {
              idAnotacion: ObjectId(),
              pagina: req.body.pagina,
              fecha: req.body.fecha,
              descripcion: req.body.descripcion,
            },
          ],
        },
      },
      ultimaPagina: req.body.ultimaPagina,
    },
    { upsert: true }
  );
  return res.json(libroAdded);
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

const marcarLibro = async (req, res) => {
  const libroMarked = await UsuarioLibro.update(
    { idUsuario: req.body.idUsuario, idLibro: req.body.idLibro },
    { ultimaPagina: req.body.ultimaPagina },
    { upsert: true }
  );
  return res.json(libroMarked);
};

const deleteAnotacion = async (req, res) => {
  const anotacionDelete = await UsuarioLibro.update(
    { idUsuario: req.body.idUsuario, idLibro: req.body.idLibro },
    { $pull: { anotaciones: { idAnotacion: req.params.id } } },
    { new: true }
  );
  return res.json(anotacionDelete);
};

module.exports = {
  createAnotacion,
  getAnotaciones,
  marcarLibro,
  deleteAnotacion,
};
