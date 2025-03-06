import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">🎵 Ampify</div>
            <nav>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
