import express from "express";

import {
    createAccountTypeController,
    deleteAccountTypeController,
    getAccountTypeController,
    listAccountTypeController,
    updateAccountTypeController,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listAccountTypeController);
router.get("/:id", getAccountTypeController);
router.post("/", createAccountTypeController);
router.patch("/:id", updateAccountTypeController);
router.delete("/:id", deleteAccountTypeController);
