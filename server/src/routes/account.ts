import express from 'express';

import { getAccount, listAccounts, createAccount, updateAccount, deleteAccount } from '../controllers/account/index.js';

export const router = express.Router()

router.get('/', listAccounts)
router.post('/', createAccount)
router.get('/:id', getAccount)
router.patch('/:id', updateAccount)
router.delete('/:id', deleteAccount)
