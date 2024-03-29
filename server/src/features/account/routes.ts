import express from "express";

import {
    createAccountController,
    deleteAccountController,
    getAccountController,
    listAccountsController,
    updateAccountController,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listAccountsController);
router.post("/", createAccountController);
router.get("/:id", getAccountController);
router.patch("/:id", updateAccountController);
router.delete("/:id", deleteAccountController);
