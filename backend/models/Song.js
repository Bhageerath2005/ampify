import mongoose from 'mongoose';

const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artistID: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
  albumID: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' },
  duration: { type: Number },
  audioUrl: { type: String, required: true }
}, { timestamps: true });

export default mongoose.model('Song', SongSchema);
