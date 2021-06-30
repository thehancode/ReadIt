const Anotaciones = require("../models/anotaciones");
const UsuarioLibro = require("../models/usuariolibros");

const createAnotacion = async (req, res) => {
  const anotacion = new Anotacion(req.body);
  const savedAnotacion = await anotacion.save();
  res.json(savedAnotacion);
};

const getAnotaciones = async (req, res) => {
  // retorna una lista de todos los libros que ha leido el usuario
  UsuarioLibro.find({ idUsuario: req.params.id }).exec((err, libroUsuario) => {
    libroUsuario.forEach((element) => {
      console.log(element);
      // Anotaciones.find({ idUsuarioLibro: element._id })
      //   .limit(10)
      //   .exec((err, anotaciones) => {
      //     res.status(200).send(anotaciones);
      //   });
    });
  });
  // ;

  // console.log("daddadadsadsa", usuarioLibro);
  // // el id de cada uno de ellos lo usamos para buscar las anotaciones
  // let anotaciones = [{}];
};

module.exports = {
  createAnotacion,
  getAnotaciones,
};
