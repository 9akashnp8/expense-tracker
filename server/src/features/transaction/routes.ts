import express from "express";

import {
    createTransactionController,
    deleteTransactionController,
    getTransactionController,
    listTransactionController,
    updateTransactionController,
    txnGroupedByCategoryController,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listTransactionController);
router.post("/", createTransactionController);
router.get("/groupedByCategory", txnGroupedByCategoryController)
router.get("/:id", getTransactionController);
router.patch("/:id", updateTransactionController);
router.delete("/:id", deleteTransactionController);
