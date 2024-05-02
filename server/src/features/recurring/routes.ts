import express from 'express'

import {
  listRecurringConfigsController
} from './controller/index.js'

export const router = express.Router()

router.get("", listRecurringConfigsController)
