// MongoDB Schema Setup

// User Collection
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["userID", "name", "email", "password", "role", "profilePicture", "status"],
      properties: {
        userID: { bsonType: "int" },
        name: { bsonType: "string" },
        email: { bsonType: "string" },
        password: { bsonType: "string" },
        role: { bsonType: "string" },
        profilePicture: { bsonType: "string" },
        status: { bsonType: "string" }
      }
    }
  }
});

// Notification Collection
db.createCollection("notifications", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["notificationID", "userID", "message", "type", "createdAt"],
      properties: {
        notificationID: { bsonType: "int" },
        userID: { bsonType: "int" },
        message: { bsonType: "string" },
        type: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
});

// Album Collection
db.createCollection("albums", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["albumID", "title", "artistID", "releaseDate", "coverImage"],
      properties: {
        albumID: { bsonType: "int" },
        title: { bsonType: "string" },
        artistID: { bsonType: "int" },
        releaseDate: { bsonType: "date" },
        coverImage: { bsonType: "string" }
      }
    }
  }
});

// Artist Collection
db.createCollection("artists", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["artistID", "name", "profilePicture"],
      properties: {
        artistID: { bsonType: "int" },
        name: { bsonType: "string" },
        profilePicture: { bsonType: "string" }
      }
    }
  }
});

// Song Collection
db.createCollection("songs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["songID", "title", "albumID", "genre", "fileURL", "lyrics"],
      properties: {
        songID: { bsonType: "int" },
        title: { bsonType: "string" },
        albumID: { bsonType: "int" },
        genre: { bsonType: "string" },
        fileURL: { bsonType: "string" },
        lyrics: { bsonType: "string" }
      }
    }
  }
});

// Playlist Collection
db.createCollection("playlists", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["playlistID", "userID", "title", "createdAt"],
      properties: {
        playlistID: { bsonType: "int" },
        userID: { bsonType: "int" },
        title: { bsonType: "string" },
        createdAt: { bsonType: "date" }
      }
    }
  }
});

// PlaylistSong Collection (for mapping songs to playlists)
db.createCollection("playlistSongs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["playlistSongID", "playlistID", "songID"],
      properties: {
        playlistSongID: { bsonType: "int" },
        playlistID: { bsonType: "int" },
        songID: { bsonType: "int" }
      }
    }
  }
});

// Like Collection
db.createCollection("likes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["likeID", "userID", "songID"],
      properties: {
        likeID: { bsonType: "int" },
        userID: { bsonType: "int" },
        songID: { bsonType: "int" }
      }
    }
  }
});

// ListeningHistory Collection
db.createCollection("listeningHistory", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["historyID", "userID", "songID", "playedAt"],
      properties: {
        historyID: { bsonType: "int" },
        userID: { bsonType: "int" },
        songID: { bsonType: "int" },
        playedAt: { bsonType: "date" }
      }
    }
  }
});

// SecurityLog Collection
db.createCollection("securityLogs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["logID", "userID", "action", "timestamp"],
      properties: {
        logID: { bsonType: "int" },
        userID: { bsonType: "int" },
        action: { bsonType: "string" },
        timestamp: { bsonType: "date" }
      }
    }
  }
});

// Subscription Collection
db.createCollection("subscriptions", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["subscriptionID", "userID", "startDate", "endDate"],
      properties: {
        subscriptionID: { bsonType: "int" },
        userID: { bsonType: "int" },
        startDate: { bsonType: "date" },
        endDate: { bsonType: "date" }
      }
    }
  }
});

// Create indexes for better query performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.songs.createIndex({ "albumID": 1 });
db.albums.createIndex({ "artistID": 1 });
db.playlistSongs.createIndex({ "playlistID": 1 });
db.likes.createIndex({ "userID": 1, "songID": 1 }, { unique: true });
db.listeningHistory.createIndex({ "userID": 1, "playedAt": -1 });
