import { Sequelize } from "sequelize";

const coneccion = new Sequelize("productos", "root", "@luis.baquiax95", {
  host: "localhost",
  dialect: "mysql",
});

export default coneccion;
