import express from 'express'

import {
  listRecurringConfigsController,
  createRecurringConfigController,
  getRecurringStatsController,
} from './controller/index.js'

export const router = express.Router()

router.get("", listRecurringConfigsController)
router.post("", createRecurringConfigController)
router.get("/stats", getRecurringStatsController)
