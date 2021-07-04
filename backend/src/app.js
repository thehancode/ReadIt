const express = require('express');
// permite registrar o ver por consola culaquier peticion que realiza el cliente
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');
const usuarioRoutes = require('./routers/usuario.routes');
const libroRoutes = require('./routers/libro.routes');
const anotacionRoutes = require('./routers/anotacion.routes');

const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));

// permite utilizar dos servidores
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(usuarioRoutes);
app.use(libroRoutes);
app.use(anotacionRoutes);

module.exports = app;