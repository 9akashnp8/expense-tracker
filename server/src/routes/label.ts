import express from 'express';

import { getLabel } from '../controllers/label/index.js';

export const router = express.Router()

router.get("/", getLabel)