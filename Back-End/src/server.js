const express = require("express");
const app = express();
const cors = require("cors");

// MIDDLEWARES
// TODO: agregar middlewares a las routes ! !
const { reqMessage, authIsUser } = require("./middleware");

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

app.use("/user", authIsUser, userRoute);
app.use("/admin", adminRoute);
app.use("/encuestador", authIsUser, encuestadorRoute);
app.use("/pregunta", authIsUser, preguntaRoute);
app.use("/respuesta", authIsUser, respuestaRoute);
app.use("/encuesta", authIsUser, encuestaRoute);
app.use("/infocard", infoCardRoute);

module.exports = app;
