import express from 'express';

import { getCategoryGroup } from '../controllers/categoryGroup/index.js';

export const router = express.Router()

router.get("/", getCategoryGroup)