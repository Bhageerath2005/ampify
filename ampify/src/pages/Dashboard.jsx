import React from "react";
import "../styles/Dashboard.css";


const Dashboard = () => {
  // Sample songs
  const songs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd" },
    { id: 2, title: "Levitating", artist: "Dua Lipa" },
    { id: 3, title: "Save Your Tears", artist: "The Weeknd" },
    { id: 4, title: "Peaches", artist: "Justin Bieber" },
    { id: 5, title: "Watermelon Sugar", artist: "Harry Styles" }
  ];

  return (
    <div className="dashboard-container">
      <h1>Your Music Library</h1>
      <p>Explore your favorite tracks and playlists.</p>
      <div className="song-list">
        {songs.map((song) => (
          <div key={song.id} className="song-item">
            <span>{song.title} - {song.artist}</span>
            <button onClick={() => alert(`Playing ${song.title}`)}>▶ Play</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

