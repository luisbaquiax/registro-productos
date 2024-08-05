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
exports.createProduct = exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.getProducts = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const getProducts = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield producto_1.default.findAll();
    response.json(listProducts);
});
exports.getProducts = getProducts;
const getProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const producto = yield producto_1.default.findByPk(id);
    if (producto) {
        response.json(producto);
    }
    else {
        response.status(404).json({
            msg: "No se encontró el procuto con el id: " + id,
        });
    }
});
exports.getProduct = getProduct;
const updateProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    try {
        const producto = yield producto_1.default.findByPk(id);
        if (producto) {
            yield producto.update(body);
            response.json({
                msg: "Se actualizó correctamente el producto.",
            });
        }
        else {
            response.status(404).json({
                msg: "No se encontró el procuto con el id: " + id,
            });
        }
    }
    catch (error) {
        response.json({
            msg: "No se pudo actualizar el producto.",
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("eliminando producto...");
    const { id } = request.params;
    const producto = yield producto_1.default.findByPk(id);
    if (!producto) {
        response.status(404).json({
            msg: `No existe un producto con el id ${id}`,
        });
    }
    else {
        yield producto.destroy();
        response.json({
            msg: "El producto fue eliminado con exito!",
        });
    }
});
exports.deleteProduct = deleteProduct;
const createProduct = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    try {
        yield producto_1.default.create(body);
        response.json({
            msg: "El producto se guardo con exito.",
        });
    }
    catch (error) {
        response.json({
            msg: "No se pudo crear el producto.",
        });
    }
});
exports.createProduct = createProduct;
