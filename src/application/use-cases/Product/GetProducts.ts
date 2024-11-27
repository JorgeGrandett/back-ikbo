import { MySQLConnection } from "../../../infrastructure/database/MySQLConnection";

export class GetProductsUseCase {
    async execute(): Promise<object | null> {

        const db = MySQLConnection.getInstance();
        const query = "CALL get_products()";
        const [rawRow]: any = await db.query(query);
        
        if (Array.isArray(rawRow) && rawRow.length > 0) {
            const result = rawRow[0] as Array<object>;
            return result;
        }

        return null;
    }
}