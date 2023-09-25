const express = require("express");
const app = express();
const cors = require('cors');
// MIDDLEWARES
const { validateToken } = require("./middleware");
// ROUTES
const { adminRoute, encuestadorRoute, preguntaRoute, infoCardRoute } = require("./routes");

app.use(cors());
app.use(express.json());

app.get('/')
app.use('/admin', adminRoute);
app.use('/encuestador', encuestadorRoute);
app.use('/pregunta', preguntaRoute);
app.use('/infocard', infoCardRoute);

module.exports = app;
