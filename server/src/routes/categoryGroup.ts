import express from 'express';

import {
    listCategoryGroup,
    getCategoryGroup,
    createCategoryGroup,
    updateCategoryGroup,
    deleteCategoryGroup
} from '../controllers/categoryGroup/index.js';

export const router = express.Router()

router.get("/", listCategoryGroup)
router.post("/", createCategoryGroup)
router.get("/:id", getCategoryGroup)
router.patch("/:id", updateCategoryGroup)
router.delete("/:id", deleteCategoryGroup)
