import express, { Express } from "express";
import cors from "cors";
import "dotenv/config"; // eslint-disable-line sort-imports

import { router } from "./features/common/routes.js";

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
