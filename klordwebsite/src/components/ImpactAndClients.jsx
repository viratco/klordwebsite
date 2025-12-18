import React from 'react';
import useInView from '../hooks/useInView';

const ImpactAndClients = () => {
    const [ref, isVisible] = useInView({ threshold: 0.3 });

    const logos = [
        "g.print", "AOLMUSIC", "TRU-TEST", "PSEG", "Western Digital", "Master-G"
    ];

    return (
        <section style={styles.section} ref={ref}>
            {/* Top Half - Stats */}
            <div style={styles.topHalf}>
                <div style={styles.container}>
                    <div
                        style={{
                            ...styles.statColumn,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s ease-out'
                        }}
                    >
                        <h3 style={styles.statTitle}>Clean Energy Generated</h3>
                        <p style={styles.statDesc}>
                            Produced massive amounts of renewable energy to power thousands of homes and businesses.
                        </p>
                    </div>

                    <div style={styles.divider}></div>

                    <div
                        style={{
                            ...styles.statColumn,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s ease-out 0.2s'
                        }}
                    >
                        <h3 style={styles.statTitle}>Businesses Empowered</h3>
                        <p style={styles.statDesc}>
                            Supported companies in reducing costs and achieving sustainability goals through solar power.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Half - Clients (Footer) */}
            <div style={styles.bottomHalf}>
                <div style={styles.footerContent}>
                    <h2
                        style={{
                            ...styles.footerTitle,
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                            transition: 'all 0.8s ease-out 0.4s'
                        }}
                    >
                        Trusted for Quality and Performance
                    </h2>

                    <div style={styles.logoGrid}>
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.logoItem,
                                    opacity: isVisible ? 0.7 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.6s ease-out ${0.6 + (index * 0.1)}s`
                                }}
                            >
                                {logo}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        scrollSnapAlign: 'start',
    },
    topHalf: {
        flex: 1, // 50%
        backgroundColor: '#F5F5F0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
    },
    bottomHalf: {
        flex: 1, // 50%
        backgroundColor: '#2A2A28', // Dark grey/brown from image
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 2rem',
    },
    statColumn: {
        flex: 1,
        padding: '0 2rem',
    },
    statTitle: {
        fontSize: '1.8rem',
        fontWeight: '500',
        marginBottom: '1rem',
        color: '#222',
        fontFamily: 'Outfit, sans-serif',
        letterSpacing: '-0.5px',
    },
    statDesc: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#666',
        maxWidth: '400px',
    },
    divider: {
        width: '1px',
        height: '100px',
        backgroundColor: '#D1D1D1',
        margin: '0 2rem',
    },
    footerContent: {
        maxWidth: '1200px',
        width: '100%',
        textAlign: 'center',
    },
    footerTitle: {
        fontSize: '2.5rem',
        fontWeight: '400',
        color: '#F5F5F0',
        marginBottom: '4rem',
        fontFamily: 'Outfit, sans-serif',
    },
    logoGrid: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '3rem',
        alignItems: 'center',
    },
    logoItem: {
        fontSize: '1.5rem',
        color: '#FFF',
        fontWeight: 'bold',
        opacity: 0.7,
        letterSpacing: '1px',
        fontFamily: 'Outfit, sans-serif',
    }
};

export default ImpactAndClients;
