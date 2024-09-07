import React from 'react';

const AdminSidebar = () => {
    return (
        <aside className="sidebar">
            <div className="text-center w-100">
                <a href="#!" className="logo">
                    <img className="img-fluid" src="/images/admin/logo.svg" alt="logo" />
                </a>
            </div>
            <ul>
                <li className="active">
                    <a href="#!">
                        <img src="/images/admin/dashboardIcon.svg" alt="dashboard-icon" />
                        Dashboard
                    </a>
                </li>
                <li><a href="Advertisements.html">
                    <img src="/images/admin/AdvertisementsIcon.svg" alt="advertisements-icon" />
                    Advertisements
                </a></li>
                <li><a href="#!">
                    <img src="/images/admin/ManageserviceIcon.svg" alt="manage-service-icon" />
                    Manage Service
                </a></li>
                <li><a href="#!">
                    <img src="/images/admin/personalcard.svg" alt="business-icon" />
                    Business
                </a></li>
                <li><a href="#!">
                    <img src="/images/admin/user.svg" alt="user-icon" />
                    User
                </a></li>
                <li><a href="#!">
                    <img src="/images/admin/nfc.svg" alt="nfc-tag-icon" />
                    NFC Tag
                </a></li>
                <li><a href="#!">
                    <img src="/images/admin/document-text.svg" alt="report-icon" />
                    Report
                </a></li>
                <li><a href="#!">
                    <img src="/images/admin/mobile.svg" alt="app-view-icon" />
                    App View
                </a></li>
            </ul>
        </aside>
    );
};

export default AdminSidebar;
