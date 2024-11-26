import express from 'express';
import logger from './infrastructure/logging/logger';
import productRoutes from "./presentation/routes/ProductRoutes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const url =  process.env.URL ?? 'http://localhost';
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/api", productRoutes);
app.get('/health', (req, res) => {
  res.send('Server OK').status(200);
});

app.listen(port, () => {
  logger.info(`Server is running at ${url}:${port}`);
});