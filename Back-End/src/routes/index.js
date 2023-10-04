const signUpRoute = require("./signUp.route");
const adminRoute = require("./admin.route");
const encuestadorRoute = require("./encuestador.route");
const infoCardRoute = require("./infoCard.route");
const preguntaRoute = require("./pregunta.route");
const respuestaRoute = require("./respuesta.route");
const encuestaRoute = require("./encuesta.route");
const userRoute = require("./user.route");
const authAdminRoute = require("./authAdmin.route");

module.exports = {
  signUpRoute,
  adminRoute,
  encuestadorRoute,
  preguntaRoute,
  infoCardRoute,
  encuestaRoute,
  respuestaRoute,
  userRoute,
  authAdminRoute
};
