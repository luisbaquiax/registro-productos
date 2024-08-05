import { Request, Response } from "express";
import productoDb from "../models/producto";

export const getProducts = async (request: Request, response: Response) => {
  const listProducts = await productoDb.findAll();
  response.json(listProducts);
};

export const getProduct = async (request: Request, response: Response) => {
  const { id } = request.params;
  const producto = await productoDb.findByPk(id);
  if (producto) {
    response.json(producto);
  } else {
    response.status(404).json({
      msg: "No se encontró el procuto con el id: " + id,
    });
  }
};

export const updateProduct = async (request: Request, response: Response) => {
  const { id } = request.params;
  const { body } = request;

  try {
    const producto = await productoDb.findByPk(id);

    if (producto) {
      await producto.update(body);
      response.json({
        msg: "Se actualizó correctamente el producto.",
      });
    } else {
      response.status(404).json({
        msg: "No se encontró el procuto con el id: " + id,
      });
    }
  } catch (error) {
    response.json({
      msg: "No se pudo actualizar el producto.",
    });
  }
};

export const deleteProduct = async (request: Request, response: Response) => {
  console.log("eliminando producto...");
  const { id } = request.params;
  const producto = await productoDb.findByPk(id);
  if (!producto) {
    response.status(404).json({
      msg: `No existe un producto con el id ${id}`,
    });
  } else {
    await producto.destroy();
    response.json({
      msg: "El producto fue eliminado con exito!",
    });
  }
};

export const createProduct = async (request: Request, response: Response) => {
  const { body } = request;
  try {
    await productoDb.create(body);
    response.json({
      msg: "El producto se guardo con exito.",
    });
  } catch (error) {
    response.json({
      msg: "No se pudo crear el producto.",
    });
  }
};
