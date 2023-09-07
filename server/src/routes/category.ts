import express from 'express';

import { getCategory } from '../controllers/category/index.js';

export const router = express.Router()

router.get("/", getCategory)