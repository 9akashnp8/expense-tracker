import express from 'express';

import {
    listTransaction,
    getTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from './controller/index.js';

export const router = express.Router()

router.get("/", listTransaction)
router.post("/", createTransaction)
router.get("/:id", getTransaction)
router.patch("/:id", updateTransaction)
router.delete("/:id", deleteTransaction)
