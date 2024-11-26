import express from 'express';
import logger from '@/utils/logger';

const app = express();
const url =  process.env.URL ?? 'http://localhost';
const port = process.env.PORT ?? 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.send('Server OK').status(200);
});

app.listen(port, () => {
  logger.info(`Server is running at ${url}:${port}`);
});