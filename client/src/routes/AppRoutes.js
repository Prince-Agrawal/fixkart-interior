import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import axios from 'axios';
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
import AdminHeader from '../components/admin/AdminHeader';
import AdminSidebar from '../components/admin/AdminSidebar';
import { CategoryList } from '../pages/admin/category/CategoryList';
import { CreateCategory } from '../pages/admin/category/CreateCategory';
import { EditCategory } from '../pages/admin/category/EditCategory';
import { ViewCategory } from '../pages/admin/category/ViewCategory';
import CategoryDetail from '../pages/CategoryDetail';


const AppRoutes = () => {
  return (
    <Router>
      <RouteWrapper />
    </Router>
  );
};

const RouteWrapper = () => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // State to handle loading
  const [categories, setCategories] = useState([]); // State to store categories

  useEffect(() => {
    // Function to check if the user is authenticated
    const checkAuthentication = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        // Include the token in the headers
        await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Set loading to false once check is complete
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`);
        setCategories(response.data.categories || []); // Set categories to the fetched data or an empty array
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    checkAuthentication();
    fetchCategories(); // Fetch categories on component mount
  }, [location]); // Re-run the check when the location changes

  const isAdminRoute = location.pathname.startsWith('/admin');

  if (loading) return <div>Loading...</div>; // Show loading while checking authentication

  return (
    <>
      {/* Render Header only if it's not an admin route */}
      {!isAdminRoute && <Header />}
      {/* Render AdminHeader and AdminSidebar only for admin routes */}
      {isAdminRoute && isAuthenticated && (
        <>
          <AdminHeader />
          <AdminSidebar />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/design-gallery" element={<DesignGallery />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/BlogDetail" element={<BlogDetail />} />

         {/* Dynamic Category Routes */}
         {Array.isArray(categories) && categories.map((category) => (
          <Route
            key={category.categorySlug}
            path={`/category/ ${category.categorySlug}`}
            element={<CategoryDetail category={category} />}
          />
        ))}

        {/* Admin routes */}
        <Route
          path="/admin/login"
          element={isAuthenticated ? <Navigate to="/admin/dashboard" /> : <AdminLogin />}
        />
        <Route
          path="/admin/dashboard"
          element={isAuthenticated ? <AdminDashboard /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/contacts"
          element={isAuthenticated ? <ContactList /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/blogs"
          element={isAuthenticated ? <BlogList /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/blogs/create"
          element={isAuthenticated ? <CreateBlog /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/blogs/view/:id"
          element={isAuthenticated ? <ViewBlog /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/blogs/edit/:id"
          element={isAuthenticated ? <EditBlog /> : <Navigate to="/admin/login" />}
        />
        {/* Review Routes */}
        <Route
          path="/admin/reviews"
          element={isAuthenticated ? <ReviewList /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/reviews/create"
          element={isAuthenticated ? <CreateReview /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/reviews/view/:id"
          element={isAuthenticated ? <ViewReview /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/reviews/edit/:id"
          element={isAuthenticated ? <EditReview /> : <Navigate to="/admin/login" />}
        />

        {/* Category Routes */}
        <Route
          path="/admin/categories"
          element={isAuthenticated ? <CategoryList /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/categories/create"
          element={isAuthenticated ? <CreateCategory /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/categories/view/:id"
          element={isAuthenticated ? <ViewCategory /> : <Navigate to="/admin/login" />}
        />
        <Route
          path="/admin/categories/edit/:id"
          element={isAuthenticated ? <EditCategory /> : <Navigate to="/admin/login" />}
        />

        {/* Catch-all route for unmatched paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
};

export default AppRoutes;
