import express from "express";

import {
    createLabelController,
    deleteLabelController,
    getLabelController,
    listLabelController,
    updateLabelController,
} from "./controller/index.js";

export const router = express.Router();

router.get("/", listLabelController);
router.post("/", createLabelController);
router.get("/:id", getLabelController);
router.patch("/:id", updateLabelController);
router.delete("/:id", deleteLabelController);
