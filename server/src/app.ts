import express, { Express } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source.js";
import "reflect-metadata" // eslint-disable-line sort-imports
import "dotenv/config"; // eslint-disable-line sort-imports

import { router } from "./routes.js";

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data source has been initialized")
    })
    .catch((err: any) => {
        console.error("Error during Data source intialization", err)
    })

const PORT = 3000;

const app: Express = express();

app.use(cors());
app.use(router);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
        `[server]: Express [Ts] Server is running at localhost:${PORT}`,
    );
});
