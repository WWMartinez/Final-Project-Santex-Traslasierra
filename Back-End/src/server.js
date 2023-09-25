const express = require("express");
const app = express();
const cors = require('cors');
// MIDDLEWARES
const { validateToken, mdwLogging, authCheck } = require("./middleware");
// ROUTES
const { adminRoute, encuestadorRoute, preguntaRoute, infoCardRoute } = require("./routes");

app.use(cors());
app.use(express.json());

// app.use(validateToken);

app.get('/', mdwLogging)
app.use('/api/admins', adminRoute);
app.use('/api/encuestadores', encuestadorRoute);
app.use('/api/preguntas', preguntaRoute);
app.use('/api/infocard', infoCardRoute);

module.exports = app;
