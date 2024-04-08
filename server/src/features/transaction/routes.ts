import express from "express";

import {
    createTransactionController,
    deleteTransactionController,
    getTransactionController,
    listTransactionController,
    updateTransactionController,
    txnGroupedByCategoryController,
    txnGroupedByDateController,
    txnMonthlyTotal,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listTransactionController);
router.post("/", createTransactionController);
router.get("/groupedByCategory", txnGroupedByCategoryController)
router.get("/groupedByDate", txnGroupedByDateController)
router.get("/monthlyTotal", txnMonthlyTotal)
router.get("/:id", getTransactionController);
router.patch("/:id", updateTransactionController);
router.delete("/:id", deleteTransactionController);
