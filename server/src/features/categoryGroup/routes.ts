import express from "express";

import {
    createCategoryGroupController,
    deleteCategoryGroupController,
    getCategoryGroupController,
    listCategoryGroupController,
    updateCategoryGroupController,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listCategoryGroupController);
router.post("/", createCategoryGroupController);
router.get("/:id", getCategoryGroupController);
router.patch("/:id", updateCategoryGroupController);
router.delete("/:id", deleteCategoryGroupController);
