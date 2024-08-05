import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/producto";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);
router.post("/", createProduct);


export default router;
