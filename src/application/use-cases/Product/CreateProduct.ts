import { Product } from "../../../domain/entities/Product";
import { MySQLConnection } from "../../../infrastructure/database/MySQLConnection";

export class CreateProductUseCase {
    async execute(name: string, barcode: string): Promise<Product | null> {

        const db = MySQLConnection.getInstance();
        const query = "CALL create_product(?, ?)";
        const [row] = await db.query(query, [name, barcode]);

        if (Array.isArray(row) && row.length > 0) {
            const result = row[0] as Array<object>;
            const resultRow = result[0] as { id_product: number };
            return { idProduct: resultRow.id_product, name: name, barcode: barcode };
        }

        return null;
    }
}