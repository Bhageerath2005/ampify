import express from 'express';
import { createPlaylist, getPlaylists } from '../controllers/playlistController.js';
const router = express.Router();

router.post('/', createPlaylist);
router.get('/', getPlaylists);

export default router;
