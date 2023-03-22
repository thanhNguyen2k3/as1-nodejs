import express from 'express';
import { getAll, getId, create, remove, update, put } from '../controllers/index.js';

const router = express.Router();
router.get('/users', getAll);
router.get('/users/:id', getId);
router.post('/users', create);
router.delete('/users/:id', remove);
router.patch('/users/:id', update);
router.put('/users/:id', put);

export default router;
