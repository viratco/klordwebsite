import React from 'react';
import useInView from '../hooks/useInView';
import CountUp from './CountUp';

const EcoTechnology = () => {
    const [ref, isVisible] = useInView({ threshold: 0.3 });

    return (
        <section style={styles.section} ref={ref}>
            <div style={styles.container}>
                <div
                    style={{
                        ...styles.leftColumn,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'all 1s ease-out'
                    }}
                >
                    <h2 style={styles.mainTitle}>
                        Eco Technology<br />
                        Integration
                    </h2>

                    <div style={styles.statBlockLeft}>
                        <h3 style={styles.bigNumber}>
                            <CountUp end={6.4} decimals={1} prefix="$" suffix="M" isVisible={isVisible} />
                        </h3>
                        <h4 style={styles.statLabel}>Most Cost-effective</h4>
                        <p style={styles.statDesc}>
                            Helped customers save millions in energy costs with affordable solar solutions.
                        </p>
                    </div>
                </div>

                <div
                    style={{
                        ...styles.dividerContainer,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
                        transition: 'all 1s ease-out 0.3s' // delay
                    }}
                >
                    <div style={styles.line}></div>
                    <div style={styles.iconCircle}>
                        {/* Simple Leaf/Eco Icon SVG */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#333" />
                            <path d="M12 18C12 18 15 14 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 14 12 18 12 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div style={styles.line}></div>
                </div>

                <div
                    style={{
                        ...styles.rightColumn,
                        transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                        opacity: isVisible ? 1 : 0,
                        transition: 'all 1s ease-out 0.2s' // delay
                    }}
                >
                    <p style={styles.topDesc}>
                        We integrate smart solar solutions with eco-friendly technology to boost efficiency, cut costs, and protect the environment.
                    </p>

                    <div style={styles.statBlockRight}>
                        <h3 style={styles.bigNumber}>
                            <CountUp end={100} suffix="K+" duration={2500} isVisible={isVisible} />
                        </h3>
                        <h4 style={styles.statLabel}>Successfully Installation</h4>
                        <p style={styles.statDesc}>
                            Delivered reliable solar systems for homes and businesses across the country.
                        </p>
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
        backgroundColor: '#F5F5F0', // Light beige tailored match
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        scrollSnapAlign: 'start',
        color: '#222',
        position: 'relative',
        overflow: 'hidden', // Prevent scrollbars during animation
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
        height: '70%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        padding: '0 2rem',
    },
    leftColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingRight: '3rem',
    },
    rightColumn: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: '3rem',
        paddingTop: '3rem', // Offset slightly to match design hierarchy visually
    },
    dividerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
    },
    line: {
        width: '1px',
        flex: 1,
        backgroundColor: '#D1D1D1',
    },
    iconCircle: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem 0',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    mainTitle: {
        fontSize: '3.5rem',
        lineHeight: '1.1',
        fontWeight: '500',
        letterSpacing: '-1.5px',
        fontFamily: 'Outfit, sans-serif',
    },
    statBlockLeft: {
        marginBottom: '2rem',
    },
    statBlockRight: {
        marginTop: 'auto',
        marginBottom: '2rem',
    },
    bigNumber: {
        fontSize: '6rem',
        fontWeight: '400',
        marginBottom: '0.5rem',
        letterSpacing: '-2px',
        fontFamily: 'Outfit, sans-serif',
        lineHeight: '1',
    },
    statLabel: {
        fontSize: '1.4rem',
        fontWeight: '500',
        marginBottom: '0.8rem',
        color: '#333',
    },
    statDesc: {
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: '#666',
        maxWidth: '350px',
    },
    topDesc: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#666',
        maxWidth: '350px',
        alignSelf: 'flex-start',
    }
};

export default EcoTechnology;
