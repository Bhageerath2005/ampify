import mongoose from 'mongoose';

const PlaylistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }]
}, { timestamps: true });

export default mongoose.model('Playlist', PlaylistSchema);
