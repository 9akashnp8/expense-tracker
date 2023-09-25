import {
    createCategoryController,
    deleteCategoryController,
    getCategoryController,
    listCategoryController,
    updateCategoryController,
} from "./controller/index.js";
import express from "express";

export const router = express.Router();

router.get("/", listCategoryController);
router.post("/", createCategoryController);
router.get("/:id", getCategoryController);
router.patch("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);
