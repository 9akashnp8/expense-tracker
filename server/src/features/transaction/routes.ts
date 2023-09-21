import express from "express";

import {
    createTransaction,
    deleteTransaction,
    getTransaction,
    listTransaction,
    updateTransaction,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listTransaction);
router.post("/", createTransaction);
router.get("/:id", getTransaction);
router.patch("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);
