import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import artistRoutes from './routes/artist.js';
import albumRoutes from './routes/album.js';
import songRoutes from './routes/song.js';
import playlistRoutes from './routes/playlist.js';
import notificationRoutes from './routes/notification.js';

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/albums', albumRoutes);
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/api/notifications', notificationRoutes);

app.get('/', (req, res) => res.send('Ampify API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
