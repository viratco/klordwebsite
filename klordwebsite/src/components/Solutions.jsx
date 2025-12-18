import React from 'react';
import solutionsBg from '../assets/solutions_bg.png';

const Solutions = () => {
    const solutions = [
        {
            title: 'Residential Solar Systems',
            description: 'Power your home with clean energy, cut electricity bills, and enjoy long-term savings with reliable solar panels.',
            isDark: false
        },
        {
            title: 'Commercial Solar Panels',
            description: 'Reduce business costs, boost sustainability, and make your company future-ready with efficient solar solutions.',
            isDark: false
        },
        {
            title: 'Solar Battery Storage',
            description: 'Store extra energy for use anytime, ensuring backup during outages and greater energy independence.',
            isDark: true
        },
        {
            title: 'Maintenance and Support',
            description: 'Keep your system performing at its best with regular monitoring, servicing, and expert assistance.',
            isDark: false
        }
    ];

    return (
        <section style={styles.section}>
            <div style={styles.overlay}></div>
            <div style={styles.container}>
                <div style={styles.header} className="animate-up">
                    <h2 style={styles.title}>Our Solar Solutions</h2>
                    <p style={styles.subtitle}>
                        There are many significant benefits to installing residential solar panels on your home's roof.
                    </p>
                </div>

                <div style={styles.grid}>
                    {solutions.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.card,
                                backgroundColor: item.isDark ? '#333' : '#F5F5F0',
                                color: item.isDark ? '#FFF' : '#333',
                            }}
                            className={`animate-up delay-${(index + 1) * 200}`}
                        >
                            <h3 style={styles.cardTitle}>{item.title}</h3>

                            <div style={styles.cardContent}>
                                <p style={{
                                    ...styles.cardDesc,
                                    color: item.isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)'
                                }}>
                                    {item.description}
                                </p>
                                <button style={styles.cardBtn}>Explore Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${solutionsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        scrollSnapAlign: 'start',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)', // Slight tint to make text readable/cards pop
        zIndex: 1,
    },
    container: {
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px', // Wider container for 4 cards
        width: '100%',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '80vh', // Contain within view
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
        color: '#FFF',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '500',
        marginBottom: '1rem',
        letterSpacing: '-1px',
        fontFamily: 'Outfit, sans-serif',
    },
    subtitle: {
        fontSize: '1rem',
        maxWidth: '500px',
        margin: '0 auto',
        opacity: 0.9,
        fontWeight: '300',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        // Removed fixed height to allow cards to size themselves
    },
    card: {
        aspectRatio: '1 / 1', // Make cards square
        padding: '2rem', // Reduced padding slightly to fit content
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        // Hover effect handled by CSS class normally, but inline for now
    },
    cardTitle: {
        fontSize: '1.8rem',
        fontWeight: '400',
        lineHeight: '1.2',
        letterSpacing: '-0.5px',
        maxWidth: '80%',
    },
    cardContent: {
        marginTop: 'auto',
    },
    cardDesc: {
        fontSize: '0.9rem',
        lineHeight: '1.5',
        marginBottom: '1.5rem',
    },
    cardBtn: {
        background: 'transparent',
        border: '1px solid currentColor',
        padding: '0.6rem 1.2rem',
        fontSize: '0.8rem',
        cursor: 'pointer',
        transition: 'all 0.2s',
        opacity: 0.8,
    }
};

export default Solutions;
