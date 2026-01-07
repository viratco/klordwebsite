import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    };

    return (
        <nav className={`navbar ${isOpen ? 'menu-open' : ''}`}>
            <div className="navbar-container">
                {/* Logo Section */}
                <div className="navbar-logo">
                    <img src={logo} alt="Sbrrealestate Logo" className="logo-image" />
                </div>

                {/* Desktop Navigation Pill */}
                <div className="navbar-menu desktop-menu">
                    <Link to="/" className="nav-link">
                        Home
                        <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <a href="#listing" className="nav-link">
                        Listing
                        <svg className="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <Link to="/info" className="nav-link">Info</Link>
                    <Link to="/blog" className="nav-link">Blog</Link>
                    <a href="#contact" className="nav-link">Contact Us</a>
                </div>

                {/* Right CTA Button (Desktop) */}
                <button className="navbar-cta desktop-cta">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 21V7L13 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 21V11L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 9V9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 12V12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 15V15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Add Property +
                </button>

                {/* Hamburger Button */}
                <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <div className="mobile-nav-links">
                        <Link to="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
                        <a href="#listing" className="mobile-link" onClick={toggleMenu}>Listing</a>
                        <Link to="/info" className="mobile-link" onClick={toggleMenu}>Info</Link>
                        <Link to="/blog" className="mobile-link" onClick={toggleMenu}>Blog</Link>
                        <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact Us</a>

                        <button className="navbar-cta mobile-cta">
                            Add Property +
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
