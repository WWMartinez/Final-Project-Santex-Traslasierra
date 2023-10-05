const express = require("express");
const app = express();
const cors = require("cors");

// MIDDLEWARES
// TODO: agregar middlewares a las routes ! !
const { reqMessage } = require("./middleware");
const authCheck = require("./middleware/authCheck.middleware");

// ROUTES
const {
  signUpRoute,
  loginRoute,
  userRoute,
  adminRoute,
  encuestadorRoute,
  preguntaRoute,
  respuestaRoute,
  encuestaRoute,
  infoCardRoute,
} = require("./routes");

// USE
app.use(cors());
app.use(express.json());
app.use(reqMessage);

app.use("/signup", signUpRoute);
app.use("/login", loginRoute);

app.use("/user", authCheck, userRoute);
app.use("/admin", authCheck, adminRoute);
app.use("/encuestador", authCheck, encuestadorRoute);
app.use("/pregunta", authCheck, preguntaRoute);
app.use("/respuesta", authCheck, respuestaRoute);
app.use("/encuesta", authCheck, encuestaRoute);
app.use("/infocard", authCheck, infoCardRoute);

module.exports = app;
