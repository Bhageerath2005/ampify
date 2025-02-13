<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<div class="navbar">
    <a href="index.jsp">Home</a>
    <a href="login.jsp">Login</a>
    <a href="signup.jsp">Signup</a>
    <a href="#">Trending</a>
    <a href="#">Playlists</a>
</div>

<style>
.navbar {
    background: #1DB954;
    padding: 15px;
    text-align: center;
    width: 100%; /* Added width to ensure it spans the page */
    box-sizing: border-box; /* Added box-sizing to include padding in width */
}

.navbar a {
    color: white;
    text-decoration: none;
    margin: 0 15px; /* Adjusted margin for better spacing */
    font-size: 18px;
    display: inline-block; /* Ensures proper spacing between links */
}

/* Style the links on hover */
.navbar a:hover {
    text-decoration: underline; /* Add underline on hover for better UX */
    opacity: 0.8; /* Slightly reduce opacity on hover */
}

/* Responsive adjustments */
@media (max-width: 600px) {
    .navbar {
        padding: 10px;
    }
    .navbar a {
        margin: 0 10px;
        font-size: 16px;
    }
}
</style>
