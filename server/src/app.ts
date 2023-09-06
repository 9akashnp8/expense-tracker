import express, { Express } from 'express';
import 'dotenv/config';


import { router } from './routes/index.js';

const PORT = 3000

const app: Express = express();
app.use(router)

app.listen(PORT, () => {
    console.log(`[server]: Express [Ts] Server is running at localhost:${PORT}`)
})