import { createPool, Pool } from "mysql2/promise";

export class MySQLConnection {
	private static instance: Pool;

	private constructor() { };

	static getInstance(): Pool {
		if (!MySQLConnection.instance) {
			MySQLConnection.instance = createPool({
				host: process.env.DB_HOST ?? "localhost",
				user: process.env.DB_USER ?? "root",
				password: process.env.DB_PASSWORD ?? "password",
				database: process.env.DB_NAME ?? "db",
				waitForConnections: true,
				connectionLimit: 10,
				queueLimit: 0,
			});
		}
		return MySQLConnection.instance;
	}
}
