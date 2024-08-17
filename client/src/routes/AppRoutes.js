// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '../pages/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AdminLogin from '../pages/admin/AdminLogin';

const AppRoutes = () => {
    return (
        <Router>
            <RouteWrapper />
        </Router>
    );
};

const RouteWrapper = () => {
    const location = useLocation();

    // Check if the path starts with '/admin'
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <>
            {/* Render Header only if it's not an admin route */}
            {!isAdminRoute && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* Admin login route */}
                <Route path="/admin/login" element={<AdminLogin />} /> 
            </Routes>
        </>
    );
};

export default AppRoutes;
