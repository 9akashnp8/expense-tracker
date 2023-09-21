import express from "express";

import {
    createCategoryGroup,
    deleteCategoryGroup,
    getCategoryGroup,
    listCategoryGroup,
    updateCategoryGroup,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listCategoryGroup);
router.post("/", createCategoryGroup);
router.get("/:id", getCategoryGroup);
router.patch("/:id", updateCategoryGroup);
router.delete("/:id", deleteCategoryGroup);
