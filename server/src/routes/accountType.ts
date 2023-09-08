import express from 'express';

import {
    listAccountType,
    getAccountType,
    createAccountType,
    updateAccountType,
    deleteAccountType
} from '../controllers/accountType/index.js';

export const router = express.Router()

router.get("/", listAccountType)
router.get("/:id", getAccountType)
router.post("/", createAccountType)
router.patch("/:id", updateAccountType)
router.delete("/:id", deleteAccountType)
