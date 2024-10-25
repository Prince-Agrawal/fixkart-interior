import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
    const [activeMenu, setActiveMenu] = useState('');
    const [extraClass, setExtraClass] = useState('');
    const [showOverlay, setShowOverlay] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        // Determine the active menu based on the path
        if (path === '/') {
            setActiveMenu('home');
        } else if (path === '/about') {
            setActiveMenu('about');
        } else if (path === '/design-gallery') {
            setActiveMenu('DesignGallery');
        } else if (path === '/modular-Kitchen') {
            setActiveMenu('ModularKitchen');
        } else if (path === '/blog') {
            setActiveMenu('Blog');
        } else {
            setActiveMenu(''); // Set to empty if path does not match any of the above
        }

        // Check if the URL is /blog and set the extra class accordingly
        if (path === '/blog') {
            setExtraClass('extra-class');
        } else {
            setExtraClass('');
        }
    }, [location.pathname]);

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
                        <Link className="navbar-brand" to="/">
                            <img src="/images/logo.svg" alt="logo"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleOverlay}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <a href="#" className="d-block d-lg-none mb-2"></a>
                            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                                <li className={`nav-item ${activeMenu === 'home' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/" onClick={() => setActiveMenu('home')}>
                                        Home
                                    </Link>
                                </li>
                                <li className={`nav-item ${activeMenu === 'about' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/about" onClick={() => setActiveMenu('about')}>
                                        About
                                    </Link>
                                </li>
                                <li className={`nav-item ${activeMenu === 'DesignGallery' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/design-gallery" onClick={() => setActiveMenu('DesignGallery')}>
                                        Design Gallery
                                    </Link>
                                </li>
                                <li className={`nav-item ${activeMenu === 'ModularKitchen' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/modular-kitchen" onClick={() => setActiveMenu('ModularKitchen')}>
                                        Modular Kitchen
                                    </Link>
                                </li>
                                <li className={`nav-item ${activeMenu === 'Blog' ? 'active' : ''}`}>
                                    <Link className="nav-link" to="/blog" onClick={() => setActiveMenu('Blog')}>
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
