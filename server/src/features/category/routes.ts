import {
    createCategory,
    deleteCategory,
    getCategory,
    listCategory,
    updateCategory,
} from "./controller/index.js";
import express from "express";

export const router = express.Router();

router.get("/", listCategory);
router.post("/", createCategory);
router.get("/:id", getCategory);
router.patch("/:id", updateCategory);
router.delete("/:id", deleteCategory);
