import e from "express";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = e.Router();

router.get("/", getProducts);
router.post("/hello", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
