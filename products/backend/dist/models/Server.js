"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routerProducto_1 = __importDefault(require("../routes/routerProducto"));
const coneccion_1 = __importDefault(require("../dataBase/coneccion"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
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
        this.app.get("/", (request, response) => {
            response.json({
                msg: "API corriendo... Hola Luis",
            });
        });
        this.app.use("/api/productos", routerProducto_1.default);
    }
    casteoJSON() {
        //parseamos el body
        this.app.use(express_1.default.json());
        //agregamos cors
        this.app.use((0, cors_1.default)());
    }
    getConeccionDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield coneccion_1.default.authenticate();
                console.log("Conectado a DB!!!.");
            }
            catch (error) {
                console.log("error al conectarse a la base datos.");
            }
        });
    }
}
exports.Server = Server;
