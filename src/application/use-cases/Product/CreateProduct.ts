import { Product } from "../../../domain/entities/Product";
import { MySQLConnection } from "../../../infrastructure/database/MySQLConnection";

export class CreateProductUseCase {
    async execute(name: string, barcode: string): Promise<Product | null> {

        return { idProduct: 2, name: 'creado', barcode: '1231231231' };
        // const db = MySQLConnection.getInstance();
        // const query = "SELECT id, name, email FROM users WHERE id = ?";
        // const [rows] = await db.query(query, [name, barcode]);

        // if (Array.isArray(rows) && rows.length > 0) {
        //     const userRow = rows[0] as { idProduct: number; name: string; barcode: string };
        //     return { idProduct: userRow.idProduct, name: userRow.name, barcode: userRow.barcode };
        // }

        // return null;
    }
}