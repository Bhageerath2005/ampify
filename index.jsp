<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Stream - Home</title>
    <style>
        /* General Styles */
        body {
            font-family: sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            /* Fallback Background Color */
            background-color: #f4f4f4;
        }

        /* Apply the background image to the body */
        body {
            background: url('https://pplx-res.cloudinary.com/image/upload/v1739423345/user_uploads/rdbMtQazZXJbcdB/Screenshot-2025-02-13-103835.jpg') no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            /* Semi-transparent background using rgba */
            background-color: rgba(244, 244, 244, 0.5); /* Adjust the 0.5 value for more or less transparency */
        }

        /* Semi-Transparent Overlay */
        body::before {
            content: "";
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            /* Semi-transparent background using rgba */
            background-color: rgba(255, 255, 255, 0.3); /* This creates a white overlay with 30% opacity */
            z-index: -1; /* Place the overlay behind the content */
        }

        /* Logo Container */
        .logo-container {
            text-align: center;
            padding: 20px;
        }

        /* Circular Logo Styles */
        .logo {
            width: 150px; /* Adjust as needed */
            height: 150px; /* Make sure height equals width for a perfect circle */
            border-radius: 50%; /* Make the image circular */
            object-fit: cover; /* Ensure the image fills the circle without distortion */
            margin-bottom: 10px; /* Space between the image and the slogan */
        }

        /* Slogan Styles */
        .slogan {
            font-style: italic;
            color: #666; /* Muted color for the slogan */
        }

        .banner {
            background: rgba(29, 185, 84, 0.8); /* Semi-transparent green */
            height: 300px;
            text-align: center;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            font-weight: bold;
        }

        .section {
            padding: 20px;
            text-align: center;
        }

        .music-grid {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap; /* Allows items to wrap to the next line on smaller screens */
        }

        .music-item {
            background: white;
            padding: 15px;
            width: 200px;
            text-align: center;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
            transition: transform 0.3s ease; /* Smooth transition for hover effect */
        }

        .music-item:hover {
            transform: translateY(-5px); /* Slight lift on hover */
        }

        .music-item img {
            width: 100%;
            border-radius: 8px;
            margin-bottom: 10px;
        }

         /* Style for Playlist button  */
        .playlists-button {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #1DB954;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }

        /* Media Query for Responsiveness */
        @media (max-width: 768px) {
            .logo {
                width: 120px; /* Smaller logo on smaller screens */
                height: 120px; /* Adjust height to maintain circular shape */
            }

            .banner {
                height: 200px; /* Smaller banner on smaller screens */
                font-size: 24px;
            }

            .music-item {
                width: 45%; /* Two items per row on medium screens */
            }
        }

        @media (max-width: 480px) {
            .logo {
                width: 100px; /* Even smaller logo on mobile */
                height: 100px; /* Adjust height to maintain circular shape */
            }

            .banner {
                height: 150px; /* Even smaller banner on mobile */
                font-size: 20px;
            }

            .music-item {
                width: 90%; /* One item per row on small screens */
            }
        }
    </style>
</head>
<body>

    <%@ include file="header.jsp" %>
     

    <!-- Logo and Slogan -->
    <div class="logo-container">
        <img src="https://pplx-res.cloudinary.com/image/upload/v1739423345/user_uploads/rdbMtQazZXJbcdB/Screenshot-2025-02-13-103835.jpg" alt="Ampipify Logo" class="logo">
        <p class="slogan">Turn Up The Volume On Life</p>
    </div>

    <div class="banner">
        <p>Stream Your Favorite Music Anytime, Anywhere</p>
    </div>

    <div class="section">
        <h2>Trending Now</h2>
        <div class="music-grid">
            <div class="music-item">
                <img src="data:image/jpeg;base64,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
                VrHJ7j7KsqoyFlMEtOqmDJHMHgOvurFA/fvn71++T63Hrc7x0c82+zOg5RNYVjhlvXgOHa3f8AO1VYOzpI67TxoVt/gpqWblRdqd5DUAQHNI1zSqCBV4wr2lXHHFKuqVQcbHsT+52fKmR7WI/w/wDwu17SqLv3rNiXS/AzTZ/93Pmfma07Y32/4rn+elSo0/kZOlIu+H9hb/xE/GqPvD/Zn+Nfk1KlQ6PmRe75ZHu6Pst5/gKNY/jd8j8qVKvR6L98v4X+aMyf7iX8Uf1G7dOUqVbJnkDeX+7P6fOjX0de3hv/AOe7/wDZWlSry/r/AM8fwYX/AEJ/yLvvB/cMR5P8noh9H390H+Le/wDkavaVeA9d/wAG/wCNfkweg+Zhi57D+tObH4N+uVKlXsIfKvwNOfTONp+ynkfkKb2Vx9W+VKlUvpFf8g/tb2f+X5motv8Atr3+H+dKlXeC1fyv/wB9By9wHrWIbV/t7v8AiXf87UqVCZS8gGmcX7J8qVKuFgAa9FKlVSDylSpVJwqVKlXHH//Z" alt="Song 1">
                <p>Trending </p>
                <p>Playlists</p>
            </div>
            <div class="music-item">
                <img src="https://c.saavncdn.com/676/Seethamma-Vakitlo-Sirimalle-Chettu-2012-500x500.jpg" alt="SVSC">
                <p>Seethamma Vakitlo Sirimalle Chettu </p>
                <p>Mani Sharama, SiriVennela Sitaramasastri
                </p>
            </div>
             <div class="music-item">
                <img src="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8439ae5fd703cc72389c74783d" alt="Shape Of You">
                <p>Shape of You</p>
                <p>ed sheeran</p>
            </div>
             <div class="music-item">
                <img src="https://yt3.googleusercontent.com/Tyx1R_RCijQJcBOOJEDqubRkpH0CYKeb_8KfxY_KCrGVktmwkB9yXYgQmwXySThHppPycR75=s900-c-k-c0x00ffffff-no-rj" alt="PLAYLIST">
                <p>Anirudh Ravichander</p>
                <p>Playlist</p>
            </div>
        </div>
    </div>

    <!-- Button for the Playlists-->
    <button class="playlists-button">Go to Playlists</button>

    <%@ include file="footer.jsp" %>

</body>
</html>
