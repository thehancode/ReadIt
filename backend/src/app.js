const express = require('express');
// permite registrar o ver por consola culaquier peticion que realiza el cliente
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');
const userRoutes = require('./routers/user.routes');

const app = express();

app.set("port", config.PORT);

app.use(morgan("dev"));
// permite utilizar dos servidores
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(userRoutes);

module.exports = app;