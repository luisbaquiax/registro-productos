"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const coneccion = new sequelize_1.Sequelize("productos", "root", "@luis.baquiax95", {
    host: "localhost",
    dialect: "mysql",
});
exports.default = coneccion;
