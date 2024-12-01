import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState('');
    const [extraClass, setExtraClass] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);
    const [categories, setCategories] = useState([]); // State to store fetched categories

    const location = useLocation();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/categories`);
                setCategories(response.data || []); // Set categories to fetched data or an empty array
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
    
        fetchCategories(); // Fetch categories on component mount
    }, []); // Empty dependency array ensures this only runs once
    
    useEffect(() => {
        const path = location.pathname;
    
        // Determine the active menu based on the path
        if (path === '/') {
            setActiveMenu('home');
        } else if (path === '/about') {
            setActiveMenu('about');
        } else if (path === '/blog') {
            setActiveMenu('blog');
        } else {
            const category = categories.find(cat => path === `/${cat.categorySlug}`);
            setActiveMenu(category ? category.categorySlug : '');
        }
    
        // Check if the URL is /blog and set the extra class accordingly
        if (path === '/blog') {
            setExtraClass('extra-class');
        } else {
            setExtraClass('');
        }
    }, [location.pathname, categories]); // Only rerun this effect when location or categories change

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const toggleOverlay = useCallback(() => {
        setShowOverlay(prev => !prev);
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    }, []);

    const closeMenuOnOverlayClick = () => {
        setShowOverlay(false);
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
    };

    // Close the menu and hide overlay when a nav link is clicked on mobile
    const handleLinkClick = (menu) => {
        setActiveMenu(menu);
        setShowOverlay(false);
        const navbarCollapse = document.getElementById('navbarSupportedContent');
        if (navbarCollapse) {
            navbarCollapse.classList.remove('show');
        }
        scrollToTop();
    };

    return (
        <>
            <header className={extraClass}>
                <div className={`overlay ${showOverlay ? 'show' : ''}`} onClick={closeMenuOnOverlayClick}></div>
                <section className='header_top_info'>
                    <div className='container'>
                        <p className='h-info-top'>
                            Enjoy Flat 20% Off On Complete Fixkart Interio. Valid Till July 31st, 2024. <span className='badge badge-outline'>Get Offer</span>
                        </p>
                    </div>
                </section>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand" to="/" onClick={() => handleLinkClick('home')}>
                            <img src="/images/logo.svg" alt="logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleOverlay}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/" onClick={() => handleLinkClick('home')}>
                                        Home
                                    </Link>
                                </li>
                                <li className={`nav-item ${activeMenu === 'about' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/about" onClick={() => handleLinkClick('about')}>
                                        About
                                    </Link>
                                </li>
                                {categories.slice(0, 2).map(category => (
                                    <li key={category._id} className={`nav-item ${activeMenu === category.categorySlug ? 'active' : ''}`}>
                                        <Link className="nav-link" to={`/${category.categorySlug}`} onClick={() => handleLinkClick(category.categorySlug)}>
                                            {category.categoryName}
                                        </Link>
                                    </li>
                                ))}
                                <li className={`nav-item ${activeMenu === 'blog' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/blog" onClick={() => handleLinkClick('blog')}>
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="header_call_btn">
                            <img src="/images/call.svg" alt="Call Icon"/> +91 78782 41849
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};
