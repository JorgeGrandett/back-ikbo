import { Router } from "express";
import { ProductController } from "@presentation/controllers/ProductController";

const router = Router();
const productController = new ProductController();
const PRODUCT = 'product';

router.post(`/${PRODUCT}`, async (req, res) => await productController.createProduct(req, res));

export default router;
