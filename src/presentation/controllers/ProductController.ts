import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/use-cases/Product/CreateProduct";
import { Product } from "../../domain/entities/Product";
import { HtppCodes } from "../../shared/constants/serverHttpCodes";

export class ProductController {

	private createProductUseCase: CreateProductUseCase;

	constructor() {
		this.createProductUseCase = new CreateProductUseCase();
	}

	async createProduct(req: Request, res: Response): Promise<void> {
		const { idProduct, name, barcode, batch, amount, expiration_date } = req.body;

		try {
			const product = await this.createProductUseCase.execute(name, barcode);

			if (!product || product.idProduct <= 0) {
				throw new Error('Error al registrar producto');
			}

			res.status(HtppCodes.CREATED).json({ product });
		} catch (error: any) {
			res.status(HtppCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
		}
	}
}
