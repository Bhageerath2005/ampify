import Playlist from '../models/Playlist.js';

export const createPlaylist = async (req, res) => {
  try {
    const { name, userID, songs } = req.body;
    const playlist = new Playlist({ name, userID, songs });
    await playlist.save();
    res.status(201).json(playlist);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find().populate('userID songs');
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
