import { Request, Response } from "express";
import { CreateProductUseCase } from "../../application/use-cases/Product/CreateProduct";
import { GetProductsUseCase } from "../../application/use-cases/Product/GetProducts";
import { HttpCodes } from "../../shared/constants/serverHttpCodes";
import { HttpResponseFormat } from "../../shared/utils/responseFormat";

export class ProductController {

	private createProductUseCase: CreateProductUseCase;
	private getProductsUseCase: GetProductsUseCase;
	private responseFormat: HttpResponseFormat;

	constructor() {
		this.createProductUseCase = new CreateProductUseCase();
		this.getProductsUseCase = new GetProductsUseCase()
		this.responseFormat = new HttpResponseFormat();
	}

	async createProduct(req: Request, res: Response): Promise<void> {
		const { name, barcode } = req.body;

		try {
			const product = await this.createProductUseCase.execute(name, barcode);

			if (!product || product.idProduct <= 0) {
				throw new Error('Error al registrar producto');
			}
			this.responseFormat.set(product, `Producto ${name} registrado correctamente`, HttpCodes.CREATED);
			res.status(HttpCodes.CREATED).json(this.responseFormat.get());
		} catch (error: any) {
			this.responseFormat.set('', error.message, HttpCodes.INTERNAL_SERVER_ERROR);
			res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(this.responseFormat.get());
		}
	};

	async getProducts(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.getProductsUseCase.execute();

			if (!result) {
				throw new Error(`Error al consultar los productos`);
			}
			this.responseFormat.set(result, `Operacion de realizada con éxito`, HttpCodes.OK);
			res.status(HttpCodes.OK).json(this.responseFormat.get());
		} catch (error: any) {
			this.responseFormat.set('', error.message, HttpCodes.INTERNAL_SERVER_ERROR);
			res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(this.responseFormat.get());
		}
	};
}
