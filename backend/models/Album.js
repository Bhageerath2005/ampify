import mongoose from 'mongoose';

const AlbumSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artistID: { type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: true },
  releaseDate: { type: Date },
  coverImage: { type: String }
}, { timestamps: true });

export default mongoose.model('Album', AlbumSchema);
