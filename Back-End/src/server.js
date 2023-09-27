const express = require("express");
const app = express();
const cors = require('cors');
// MIDDLEWARES
const { validateToken, mdwLogging, authCheck } = require("./middleware");
// ROUTES
const { adminRoute, encuestadorRoute, preguntaRoute, infoCardRoute, encuestaRoute } = require("./routes");

app.use(cors());
app.use(express.json());

app.get('/')
app.use('/admin', adminRoute);
app.use('/encuestador', encuestadorRoute);
app.use('/pregunta', preguntaRoute);
app.use('/infocard', infoCardRoute);
app.use('/encuesta', encuestaRoute);

module.exports = app;
