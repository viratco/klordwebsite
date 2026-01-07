import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaPlus, FaUsers, FaSignOutAlt, FaBuilding, FaCloudUploadAlt } from 'react-icons/fa';
import './Sidebar.css';

import logo from '../assets/logo.png';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth token logic here
        localStorage.removeItem('sbr_admin_token');
        navigate('/login');
    };

    return (
        <aside className="sidebar">
            <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'center', padding: '2rem 1rem' }}>
                <img src={logo} alt="SBR Logo" style={{ width: '140px', objectFit: 'contain' }} />
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} end>
                    <FaBuilding />
                    <span>Dashboard</span>
                </NavLink>

                <NavLink to="/add-property" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <FaPlus />
                    <span>Add Property</span>
                </NavLink>

                <NavLink to="/leads" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <FaUsers />
                    <span>Leads</span>
                </NavLink>

                <NavLink to="/blog" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <FaCloudUploadAlt /> {/* Reusing icon or changing to better one */}
                    <span>Blog</span>
                </NavLink>
            </nav>

            <div className="sidebar-footer">
                <button className="logout-btn" onClick={handleLogout}>
                    <FaSignOutAlt />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
