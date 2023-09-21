import express from "express";

import {
    createAccountType,
    deleteAccountType,
    getAccountType,
    listAccountType,
    updateAccountType,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listAccountType);
router.get("/:id", getAccountType);
router.post("/", createAccountType);
router.patch("/:id", updateAccountType);
router.delete("/:id", deleteAccountType);
