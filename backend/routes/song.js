import express from 'express';
import { createSong, getSongs } from '../controllers/songController.js';
const router = express.Router();

router.post('/', createSong);
router.get('/', getSongs);

export default router;
