import Song from '../models/Song.js';

export const createSong = async (req, res) => {
  try {
    const { title, artistID, albumID, duration, audioUrl } = req.body;
    const song = new Song({ title, artistID, albumID, duration, audioUrl });
    await song.save();
    res.status(201).json(song);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getSongs = async (req, res) => {
  try {
    const songs = await Song.find().populate('artistID albumID');
    res.json(songs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
