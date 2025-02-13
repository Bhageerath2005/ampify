<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup - Music Stream</title>
</head>
<body>

    <%@ include file="header.jsp" %>

    <div class="signup-container">
        <h2>Signup</h2>
        <form>
            <input type="text" placeholder="Username" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Password" required>
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="login.jsp">Login</a></p><br>
        <a href="index.jsp">Click to Home</a>
    </div>

    <%@ include file="footer.jsp" %>

</body>
</html>

<style>
    .signup-container {
        width: 300px;
        margin: 50px auto;
        text-align: center;
        padding: 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    input, button {
        display: block;
        width: 100%;
        margin: 10px 0;
        padding: 10px;
    }
    button {
        background: #1DB954;
        color: white;
        border: none;
    }
</style>