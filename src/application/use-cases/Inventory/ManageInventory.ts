import { MySQLConnection } from "../../../infrastructure/database/MySQLConnection";

export class ManageInventoryUseCase {
    async execute(idProduct: number, batch: string, amount: number, expirationDate: Date, operation: string): Promise<boolean> {

        const db = MySQLConnection.getInstance();
        const query = "CALL manage_inventory(?, ?, ?, ?, ?)";
        const [row]: any = await db.query(query, [idProduct, batch, amount, expirationDate, operation]);
        
        if(row?.affectedRows === 1) return true;

        return false;
    }
}