import { Sequelize } from "sequelize";

// Conexión a la BD MySQL nombreBaseDeDatos / NombreUsuario / contraseñaDelWorkbench 
const sequelize = new Sequelize('app-mina', 'root', 'admin', {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;