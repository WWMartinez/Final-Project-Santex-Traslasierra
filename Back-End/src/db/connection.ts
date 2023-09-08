import { Sequelize } from "sequelize";

// Conexión a la BD MySQL nombreBaseDeDatos / NombreUsuario / contraseñaDelWorkbench 
const sequelize = new Sequelize('appmina', 'root', 'adminadmin', {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
