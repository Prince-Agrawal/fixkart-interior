// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/Dashboard';
import ContactList from '../pages/admin/ContactList';
import { CreateBlog } from '../pages/admin/blog/CreateBlog';
import { CreateReview } from '../pages/admin/CreateReview';
import { BlogList } from '../pages/admin/blog/BlogList';
import { ViewBlog } from '../pages/admin/blog/ViewBlog';
import { EditBlog } from '../pages/admin/blog/EditBlog';

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
                <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
                <Route path="/admin/contacts" element={<ContactList />} /> 
                <Route path="/admin/blogs" element={<BlogList />} />
                <Route path="/admin/blogs/create" element={<CreateBlog />} />  
                <Route path="/admin/blogs/view/:id" element={<ViewBlog />} />
                <Route path="/admin/blogs/edit/:id" element={<EditBlog />} />
                <Route path="/admin/createReview" element={<CreateReview />} /> 
            </Routes>
        </>
    );
};

export default AppRoutes;
