import { Sequelize } from "sequelize";

const sequelize = new Sequelize('app-mina', 'root', 'admin', {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;