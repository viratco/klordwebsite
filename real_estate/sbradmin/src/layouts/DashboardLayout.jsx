import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
    // Simple auth check
    const isAuthenticated = localStorage.getItem('sbr_admin_token');

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{
                flex: 1,
                marginLeft: 'var(--sidebar-width)',
                padding: '2rem',
                maxWidth: '1200px',
                marginRight: 'auto'
            }}>
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
