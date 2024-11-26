import { Pool } from "mysql2/promise";
import { MySQLConnection } from "../../../infrastructure/database/MySQLConnection";
import { Product } from "../../../domain/entities/Product";

export class ProductRepository {
  private db: Pool;

  constructor() {
    this.db = MySQLConnection.getInstance();
  }

  async save(user: Product): Promise<void> {
    const query = "INSERT INTO users (id, name, barcode) VALUES (?, ?, ?)";
    await this.db.execute(query, [user.idProduct, user.name, user.barcode]);
  }

  async findById(userId: string): Promise<Product | null> {
    const query = "SELECT id_product, name, barcode FROM users WHERE id = ?";
    const [rows] = await this.db.query(query, [userId]);

    if (Array.isArray(rows) && rows.length > 0) {
      const userRow = rows[0] as { idProduct: number; name: string; barcode: string };
      return new Product(userRow.idProduct, userRow.name, userRow.barcode);
    }

    return null;
  }
}
