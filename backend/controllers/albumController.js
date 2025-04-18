import Album from '../models/Album.js';

export const createAlbum = async (req, res) => {
  try {
    const { title, artistID, releaseDate, coverImage } = req.body;
    const album = new Album({ title, artistID, releaseDate, coverImage });
    await album.save();
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

export const getAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate('artistID');
    res.json(albums);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
