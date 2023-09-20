import express, { Express } from "express";
import cors from "cors";
import "dotenv/config";


import { router } from "./features/common/routes.js";

const PORT = 3000

const app: Express = express();
app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log(`[server]: Express [Ts] Server is running at localhost:${PORT}`)
})