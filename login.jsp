<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Music Stream</title>
    <style>
        .login-container {
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
            box-sizing: border-box; /* Added to include padding and border in the element's total width and height */
        }
        button {
            background: #1DB954;
            color: white;
            border: none;
            cursor: pointer; /* Indicate that the button is clickable */
        }
        button:hover {
            background: #146c33; /* darken the color on hover to provide a better user experience */
        }

    </style>
</head>
<body>

    <%@ include file="header.jsp" %>

    <div class="login-container">
        <h2>Login</h2>
        <form action="LoginServlet" method="post">
            <input type="text" name="username" placeholder="Username" required>
            <input type="password" name="password" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="signup.jsp">Sign up</a></p><br>
        <a href="index.jsp">Click to Home</a> 
    </div>
       
     <%@ include file="footer.jsp" %>
        

</body>
</html>
