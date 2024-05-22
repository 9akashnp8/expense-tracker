import {
  listCreditCardSettingsController,
  getCreditCardSettingsController,
  createCreditCardSettingController,
  updateCreditCardSettingController,
  deleteCreditCardSettingController
} from "../../controllers/management/credit-card-manager.controller.js";

import express from "express";

export const router = express.Router()

router.get("/", listCreditCardSettingsController)
router.post("/", createCreditCardSettingController)
router.get("/:id", getCreditCardSettingsController)
router.patch("/:id", updateCreditCardSettingController)
router.delete("/:id", deleteCreditCardSettingController)
