import { Request, Response, Router } from "express";
import { ProductController } from "../../presentation/controllers/ProductController";
import validate from "../middlewares/validateMiddleware";
import { createProductSchema } from "../../shared/validation/productValidation";

const router = Router();
const productController = new ProductController();
const PRODUCT = 'product';

router.post(`/${PRODUCT}`, validate(createProductSchema), async (req: Request, res: Response) => await productController.createProduct(req, res));

export default router;
