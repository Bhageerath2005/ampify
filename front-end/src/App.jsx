import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./styles/App.css";
import Register from "./pages/Register";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
