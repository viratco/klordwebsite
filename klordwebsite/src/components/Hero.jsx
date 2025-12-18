
import React from 'react';
import bgImage from '../assets/bg.png';
import Header from './Header';

const Hero = () => {
    return (
        <section style={styles.hero}>
            <Header />
            <div style={styles.overlay}></div>

            <div style={styles.content}>
                <div style={styles.pillContainer} className="animate-up">
                    <div style={styles.pillBadge}>
                        <span style={styles.dot}></span>
                        Utility prices have steadily increased
                    </div>
                </div>

                <h1 style={styles.headline} className="animate-up delay-200">
                    <span style={{ display: 'block' }}>Energy Saving</span>
                    <span style={{ display: 'block' }}>Renewable Solar</span>
                </h1>

                <p style={styles.subtext} className="animate-up delay-400">
                    We have become a preferred partner to leading biofuel refiners, major oil companies, blenders, retailers, and other commodity companies.
                </p>

                <button className="primary-btn animate-up delay-600" style={styles.ctaButton}>
                    Get a Free Quote
                </button>
            </div>

            <div style={styles.hugeTextContainer}>
                <h1 style={styles.hugeText}>Klord Energy</h1>
            </div>
        </section>
    );
};

const styles = {
    hero: {
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Parallax effect
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.4) 100%)',
        zIndex: 1,
    },
    content: {
        position: 'relative',
        zIndex: 2,
        maxWidth: '800px',
        padding: '0 1rem',
        marginTop: '-5vh', // Optical adjustment
    },
    pillContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1.5rem',
    },
    pillBadge: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(5px)',
        padding: '0.4rem 1rem',
        borderRadius: '50px',
        fontSize: '0.9rem',
        fontWeight: '400',
        border: '1px solid rgba(255, 255, 255, 0.1)',
    },
    dot: {
        width: '6px',
        height: '6px',
        backgroundColor: '#fff',
        borderRadius: '50%',
    },
    headline: {
        fontSize: '5rem',
        lineHeight: '1.1',
        fontWeight: '400', // Making it slightly lighter than bold
        marginBottom: '1.5rem',
        color: '#EBE3D0', // Beige color from screenshot
        letterSpacing: '-2px',
        fontFamily: 'Outfit, sans-serif',
    },
    subtext: {
        fontSize: '1rem',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '0 auto 2.5rem',
        color: 'rgba(255, 255, 255, 0.9)',
    },
    ctaButton: {
        backgroundColor: '#F5F5F0',
        color: '#333',
    },
    hugeTextContainer: {
        position: 'absolute',
        bottom: '-25px', /* Partially cut off as per design */
        left: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 2,
        overflow: 'hidden',
    },
    hugeText: {
        fontSize: '13rem', // Reduced from 18rem to fit longer name
        fontWeight: '700',
        color: 'transparent',
        WebkitTextStroke: '2px rgba(235, 227, 208, 0.15)',
        backgroundImage: 'linear-gradient(to bottom, #EBE3D0, rgba(235, 227, 208, 0))',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        lineHeight: '0.8',
        letterSpacing: '-5px',
        opacity: 0.8,
    }
};

export default Hero;
