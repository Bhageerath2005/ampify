import mongoose from 'mongoose';

const ArtistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  profilePicture: { type: String },
}, { timestamps: true });

export default mongoose.model('Artist', ArtistSchema);
