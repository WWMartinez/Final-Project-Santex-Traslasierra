const express = require("express");
const app = express();
const cors = require('cors');
// MIDDLEWARES 
// TODO: aplicar middlewares a las routes ! ! 
const { mdwLogging } = require("./middleware");
// ROUTES
const { adminRoute, encuestadorRoute, preguntaRoute, infoCardRoute, encuestaRoute, respuestaRoute, userRoute, authAdminRoute } = require("./routes");

app.use(cors());
app.use(express.json());

app.use(mdwLogging);
// app.get('/')
app.use("/login", authAdminRoute);

app.use('/admin', adminRoute);
app.use('/encuestador', encuestadorRoute);
app.use('/infocard', infoCardRoute);
app.use('/pregunta', preguntaRoute);
app.use('/respuesta', respuestaRoute);
app.use('/encuesta', encuestaRoute);
app.use('/user', userRoute);

module.exports = app;
