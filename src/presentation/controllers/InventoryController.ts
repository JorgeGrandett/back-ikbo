import { Request, Response } from "express";
import { ManageInventoryUseCase } from "../../application/use-cases/Inventory/ManageInventory";
import { GetInventoryUseCase } from "../../application/use-cases/Inventory/GetInventory"; 
import { GetInventoryStatusUseCase } from "../../application/use-cases/Inventory/GetInventoryStatus";
import { HttpCodes } from "../../shared/constants/serverHttpCodes";
import { HttpResponseFormat } from "../../shared/utils/responseFormat";
import { typeIventoryOperation } from "../../shared/utils/typeInventoryOperation";

export class InventoryController {

	private manageInventoryUseCase: ManageInventoryUseCase;
	private getInventoryUseCase: GetInventoryUseCase;
	private getInventoryStatusUseCase: GetInventoryStatusUseCase;
	private responseFormat: HttpResponseFormat;

	constructor() {
		this.manageInventoryUseCase = new ManageInventoryUseCase();
		this.getInventoryUseCase = new GetInventoryUseCase();
		this.getInventoryStatusUseCase = new GetInventoryStatusUseCase();
		this.responseFormat = new HttpResponseFormat();
	}

	async manageInventory(req: Request, res: Response): Promise<void> {
		const { idProduct, batch, amount, expirationDate, operation } = req.body;

		try {
			const result = await this.manageInventoryUseCase.execute(idProduct, batch, amount, expirationDate?.split('T')[0], operation);

			if (!result) {
				throw new Error(`Error al realizar la ${typeIventoryOperation(operation)} en el inventario del producto`);
			}
			this.responseFormat.set('', `Operacion de ${typeIventoryOperation(operation)} realizada con éxito`, HttpCodes.OK);
			res.status(HttpCodes.OK).json(this.responseFormat.get());
		} catch (error: any) {
			this.responseFormat.set('', error.message, HttpCodes.INTERNAL_SERVER_ERROR);
			res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(this.responseFormat.get());
		}
	};

	async getInventory(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.getInventoryUseCase.execute();

			if (!result) {
				throw new Error(`Error al consultar el inventario de productos`);
			}
			this.responseFormat.set(result, `Operacion de realizada con éxito`, HttpCodes.OK);
			res.status(HttpCodes.OK).json(this.responseFormat.get());
		} catch (error: any) {
			this.responseFormat.set('', error.message, HttpCodes.INTERNAL_SERVER_ERROR);
			res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(this.responseFormat.get());
		}
	};

	async getInventoryStatus(req: Request, res: Response): Promise<void> {
		try {
			const result = await this.getInventoryStatusUseCase.execute();

			if (!result) {
				throw new Error(`Error al consultar el inventario de productos con estado`);
			}
			this.responseFormat.set(result, `Operacion de realizada con éxito`, HttpCodes.OK);
			res.status(HttpCodes.OK).json(this.responseFormat.get());
		} catch (error: any) {
			this.responseFormat.set('', error.message, HttpCodes.INTERNAL_SERVER_ERROR);
			res.status(HttpCodes.INTERNAL_SERVER_ERROR).json(this.responseFormat.get());
		}
	};
}
