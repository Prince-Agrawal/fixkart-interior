import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();

    // Fetch the user's profile on component mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('authToken');
                if (!token) return;

                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/profile`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                setUserEmail(response.data.user.email); // Update state with fetched email
            } catch (error) {
                console.error('Error fetching profile:', error);
                // Handle error or redirect to login if unauthorized
                navigate('/admin/login');
            }
        };

        fetchProfile();
    }, [navigate]);

    // Handle sign-out
    const handleSignOut = () => {
        localStorage.removeItem('authToken'); // Remove token from localStorage
        navigate('/admin/login'); // Redirect to login page
    };

    return (
        <div className="admin-dashboard">
            <header className="header">
                <div className="w-100 d-flex align-items-center">
                    <div className="menu-btn">
                        <img src="/images/admin/menu.svg" alt="menu" />
                    </div>
                    <div className="ms-auto d-flex align-items-center">
                        <div className="dropdown">
                            <a className="dropdown-toggle" href="#!" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {userEmail}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="profile-pic-box text-center">
                                    <img src="/images/admin/profile-img.png" alt="profile" />
                                    <h5>Planing</h5>
                                </div>
                                <div className="text-center pt-2">
                                    <a href="javascript:void(0)" className="btn signout-btn" onClick={handleSignOut}>Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>

    );
};

export default AdminHeader;
