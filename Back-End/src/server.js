const express = require("express");
const app = express();
const cors = require("cors");
// MIDDLEWARES
// TODO: agregar middlewares a las routes ! !
const { reqMessage, validateToken } = require("./middleware");
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
// app.get('/')
app.use("/signup", signUpRoute);
app.use("/login", loginRoute);

app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/encuestador", encuestadorRoute);
app.use("/pregunta", preguntaRoute);
app.use("/respuesta", respuestaRoute);
app.use("/encuesta", encuestaRoute);
app.use("/infocard", infoCardRoute);

module.exports = app;
