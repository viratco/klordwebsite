import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer}>
                <div style={styles.iconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="#333" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span style={styles.logoText}>Klord Energy</span>
            </div>

            <nav style={styles.nav}>
                {['Home', 'About', 'Product', 'Services', 'Benefits'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} style={styles.navLink}>
                        {item}
                    </a>
                ))}
            </nav>

            <div style={styles.authButtons}>
                <button className="glass-btn" style={{ marginRight: '1rem', backgroundColor: '#EBE3D0', color: '#333', border: 'none' }}>
                    Contact us
                </button>
                <button className="glass-btn">
                    Registration
                </button>
            </div>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 3rem',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        color: '#fff',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
    },
    iconBox: {
        width: '32px',
        height: '32px',
        backgroundColor: '#EBE3D0',
        borderRadius: '8px', /* Polygon shape in design is roughly a hexagon or diamond, simplified as rounded rect */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotate(45deg)', /* Trying to simulate the diamond shape */
    },
    logoText: {
        fontSize: '1.8rem',
        fontWeight: '700',
        letterSpacing: '-0.5px',
    },
    nav: {
        display: 'flex',
        gap: '2rem',
    },
    navLink: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: '1rem',
        fontWeight: '400',
        transition: 'color 0.2s',
    },
    authButtons: {
        display: 'flex',
    }
};

export default Header;
