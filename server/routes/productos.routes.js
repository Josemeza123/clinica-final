import { Router } from "express";
import { getProducto, getProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.get("/productos", getProductos);

router.get("/producto/:id",getProducto)

export default router;
