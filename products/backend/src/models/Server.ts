import express, { Application, Request, Response } from "express";
import cors from "cors";
import routesProduct from "../routes/routerProducto";
import dataBase from "../dataBase/coneccion";

export class Server {
  public app: Application;
  public puerto: String;

  constructor() {
    this.app = express();
    this.puerto = process.env.PORT || "3001";
    this.listen();
    this.casteoJSON();
    this.routes();
    this.getConeccionDb();
  }

  listen() {
    this.app.listen(this.puerto, () => {
      console.log(`aplicacion corriendo en puert ${this.puerto}`);
    });
  }

  routes() {
    this.app.get("/", (request: Request, response: Response) => {
      response.json({
        msg: "API corriendo... Hola Luis",
      });
    });
    this.app.use("/api/productos", routesProduct);
  }

  casteoJSON() {
    //parseamos el body
    this.app.use(express.json());
    //agregamos cors
    this.app.use(cors());
  }

  async getConeccionDb() {
    try {
      await dataBase.authenticate();
      console.log("Conectado a DB!!!.");
    } catch (error) {
      console.log("error al conectarse a la base datos.");
    }
  }
}
