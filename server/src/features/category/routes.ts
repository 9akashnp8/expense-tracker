import express from "express";

import {
    listCategory,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} from "./controller/index.js";

export const router = express.Router()

router.get("/", listCategory)
router.post("/", createCategory)
router.get("/:id", getCategory)
router.patch("/:id", updateCategory)
router.delete("/:id", deleteCategory)
