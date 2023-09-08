import express from 'express';

import {
    listLabel,
    getLabel,
    createLabel,
    updateLabel,
    deleteLabel
} from './controller/index.js';

export const router = express.Router()

router.get("/", listLabel)
router.post("/", createLabel)
router.get("/:id", getLabel)
router.patch("/:id", updateLabel)
router.delete("/:id", deleteLabel)
