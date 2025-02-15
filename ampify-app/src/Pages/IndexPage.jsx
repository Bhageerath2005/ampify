import React from "react";
import { Link } from "react-router-dom";
import "../styles/IndexPage.css";

const IndexPage = () => {
    return (
        <div className="index-container">
            <h1>Welcome to Ampify</h1>
            <p>Listen to your favorite music anytime, anywhere.</p>
            <Link to="/login" className="btn">Get Started</Link>
        </div>
    );
};

export default IndexPage;
