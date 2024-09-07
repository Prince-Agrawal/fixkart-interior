import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="admin-dashboard">
            <aside className="sidebar">
                <div className="text-center w-100">
                    <Link to="/admin/dashboard" className="logo">
                        <img className="img-fluid" src="/images/admin/logo.svg" alt="logo" />
                    </Link>
                </div>
                <ul>
                    <li className="active">
                        <Link to="/admin/dashboard">
                            <img src="/images/admin/dashboardIcon.svg" alt="dashboard-icon" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/blogs">
                            <img src="/images/admin/personalcard.svg" alt="business-icon" />
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/reviews">
                            <img src="/images/admin/mobile.svg" alt="app-view-icon" />
                            Reviews
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/contacts">
                            <img src="/images/admin/user.svg" alt="user-icon" />
                            Contacts
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/tags">
                            <img src="/images/admin/document-text.svg" alt="report-icon" />
                            Tags
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default AdminSidebar;
    