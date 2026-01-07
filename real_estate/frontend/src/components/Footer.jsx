import { FaEnvelope, FaPhone, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';
import logo from '../assets/logo.png';
import footerBg from '../assets/footer_bg.png';

const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
            <div className="footer-content">
                {/* Column 1: Brand */}
                <div className="footer-col brand-col">
                    <div className="footer-logo">
                        <img src={logo} alt="SbrEstates" />
                        <span className="logo-text">SBR ESTATES</span>
                    </div>
                    <p className="footer-desc">
                        When choosing a property with us, rest assured that every estate is carefully vetted for architectural excellence and investment value.
                    </p>
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon"><FaMapMarkerAlt /></div>
                            <div className="contact-text">
                                <p>Cb-009; Ansal Golf Link -1,</p>
                                <p>Greater Noida</p>
                            </div>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon"><FaPhone /></div>
                            <div className="contact-text">
                                <p>+91 97180 16677</p>
                                <p>+91 9718056662</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="footer-col links-col">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="/"><FaChevronRight /> Home</a></li>
                        <li><a href="#about"><FaChevronRight /> About Us</a></li>
                        <li><a href="#properties"><FaChevronRight /> Properties</a></li>
                        <li><a href="#contact"><FaChevronRight /> Contact</a></li>
                    </ul>
                </div>

                {/* Column 3: Legal & Support (Simplified) */}
                <div className="footer-col links-col">
                    <h3>Support</h3>
                    <ul className="footer-links">
                        <li><a href="#"><FaChevronRight /> Privacy Policy</a></li>
                        <li><a href="#"><FaChevronRight /> Terms of Service</a></li>
                        <li><a href="#"><FaChevronRight /> FAQs</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="copyright">
                    Copyright: © 2025 by SbrEstates. All Rights Reserved.
                </div>
                <div className="bottom-links">
                    <a href="#">Listing</a>
                    <a href="#">Real Estate</a>
                    <a href="#">Our Consultants</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>


        </footer>
    );
};

export default Footer;
