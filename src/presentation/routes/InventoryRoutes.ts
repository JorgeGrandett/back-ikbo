import { Request, Response, Router } from "express";
import { InventoryController } from "../controllers/InventoryController";
import validate from "../middlewares/validateMiddleware";
import { manageInventorySchema } from "../../shared/validation/inventoryValidation";

const router = Router();
const inventoryController = new InventoryController();
const INVENTORY = 'inventory';

router.post(`/${INVENTORY}/manage`, validate(manageInventorySchema), async (req: Request, res: Response) => await inventoryController.manageInventory(req, res));
router.get(`/${INVENTORY}`, async (req: Request, res: Response) => await inventoryController.getInventory(req, res));
router.get(`/${INVENTORY}/status`, async (req: Request, res: Response) => await inventoryController.getInventoryStatus(req, res));

export default router;
