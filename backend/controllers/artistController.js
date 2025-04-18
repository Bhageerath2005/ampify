import Artist from '../models/Artist.js';

export const createArtist = async (req, res) => {
  try {
    const { name, profilePicture } = req.body;
    const artist = new Artist({ name, profilePicture });
    await artist.save();
    res.status(201).json(artist);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.json(artists);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
