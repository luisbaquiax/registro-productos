import coneccion from "../dataBase/coneccion";
import { DataTypes } from "sequelize";

const ProductoDb = coneccion.define(
  "Producto",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    stock: {
      type: DataTypes.NUMBER,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default ProductoDb;
