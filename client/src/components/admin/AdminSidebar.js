import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="text-center w-100">
                    <Link to="/admin/dashboard" className="logo">
                        <img className="img-fluid" src="/images/admin/logo.svg" alt="logo" />
                    </Link>
                </div>
                <ul>
                    <li className={isActive('/admin/dashboard') ? 'active' : ''}>
                        <Link to="/admin/dashboard">
                            <img src="/images/admin/dashboardIcon.svg" alt="dashboard-icon" />
                            Dashboard
                        </Link>
                    </li>
                    <li className={isActive('/admin/blogs') ? 'active' : ''}>
                        <Link to="/admin/blogs">
                            <img src="/images/admin/personalcard.svg" alt="business-icon" />
                            Blogs
                        </Link>
                    </li>
                    <li className={isActive('/admin/reviews') ? 'active' : ''}>
                        <Link to="/admin/reviews">
                            <img src="/images/admin/mobile.svg" alt="app-view-icon" />
                            Reviews
                        </Link>
                    </li>
                    <li className={isActive('/admin/contacts') ? 'active' : ''}>
                        <Link to="/admin/contacts">
                            <img src="/images/admin/user.svg" alt="user-icon" />
                            Contacts
                        </Link>
                    </li>
                    <li className={isActive('/admin/categories') ? 'active' : ''}>
                        <Link to="/admin/categories">
                            <img src="/images/admin/document-text.svg" alt="report-icon" />
                            Categories
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default AdminSidebar;
