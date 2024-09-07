import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Header } from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import AdminLogin from '../pages/admin/AdminLogin';
import AdminDashboard from '../pages/admin/Dashboard';
import ContactList from '../pages/admin/ContactList';
import { CreateBlog } from '../pages/admin/blog/CreateBlog';
import { BlogList } from '../pages/admin/blog/BlogList';
import { ViewBlog } from '../pages/admin/blog/ViewBlog';
import { EditBlog } from '../pages/admin/blog/EditBlog';
import { CreateReview } from '../pages/admin/review/CreateReview';
import { ReviewList } from '../pages/admin/review/ReviewList';
import { ViewReview } from '../pages/admin/review/ViewReview';
import { EditReview } from '../pages/admin/review/EditReview';
import DesignGallery from '../pages/DesignGallery';
import Footer from '../components/Footer';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';


const AppRoutes = () => {
    return (
        <Router>
            <RouteWrapper />
        </Router>
    );
};

const RouteWrapper = () => {
    const location = useLocation();

    // Function to check if the user is authenticated
    const isAuthenticated = () => {
        // Example check, replace with your actual authentication check
        return !!localStorage.getItem('authToken');
    };

    // Check if the path starts with '/admin'
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <>
            {/* Render Header only if it's not an admin route */}
            {!isAdminRoute && <Header />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/DesignGallery" element={<DesignGallery />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/BlogDetail" element={<BlogDetail />} />

                {/* Admin routes */}
                <Route
                    path="/admin/login"
                    element={isAdminRoute && !isAuthenticated() ? <AdminLogin /> : <Navigate to="/admin/dashboard" />}
                />
                <Route
                    path="/admin/dashboard"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <AdminDashboard />}
                />
                <Route
                    path="/admin/contacts"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <ContactList />}
                />
                <Route
                    path="/admin/blogs"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <BlogList />}
                />
                <Route
                    path="/admin/blogs/create"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <CreateBlog />}
                />
                <Route
                    path="/admin/blogs/view/:id"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <ViewBlog />}
                />
                <Route
                    path="/admin/blogs/edit/:id"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <EditBlog />}
                />
                
                {/* Review Routes */}
                <Route
                    path="/admin/reviews"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <ReviewList />}
                />
                <Route
                    path="/admin/reviews/create"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <CreateReview />}
                />
                <Route
                    path="/admin/reviews/view/:id"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <ViewReview />}
                />
                <Route
                    path="/admin/reviews/edit/:id"
                    element={isAdminRoute && !isAuthenticated() ? <Navigate to="/admin/login" /> : <EditReview />}
                />

                {/* Catch-all route for unmatched paths */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

            <Footer />
        </>
    );
};

export default AppRoutes;
