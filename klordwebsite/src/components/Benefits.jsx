import React from 'react';
import appVideo from '../assets/iphone.mp4';

const Benefits = () => {
    const benefitsData = [
        // ... (data remains the same)
        {
            title: "Cost Saving",
            description: "Solar energy can significantly reduce electricity bills over time, offering long-term savings on utility costs."
        },
        {
            title: "Environmental Benefits",
            description: "Solar power is a clean, renewable energy source that reduces carbon footprint and helps combat change."
        },
        {
            title: "Energy Independence",
            description: "Solar panels provide homeowners with more control over their energy usage, reducing reliance on tradition."
        },
        {
            title: "Increased Home Value",
            description: "Homes with solar panels typically sell at a premium and are more attractive to eco-conscious buyers."
        },
        {
            title: "Government Incentives",
            description: "Many governments offer incentives, rebates, and tax credits for installing solar panels."
        },
        {
            title: "Long-Term Reliability",
            description: "Solar panels have minimal maintenance requirements and often come with warranties lasting 25 years."
        },
    ];

    return (
        <section id="benefits" style={styles.section}>
            <div style={styles.container}>
                <div style={styles.header}>
                    <div style={styles.headerText}>
                        <h2 style={styles.title} className="animate-up">
                            Why Choose<br />
                            Residential Solar<br />
                            Panels?
                        </h2>
                        <p style={styles.description} className="animate-up delay-200">
                            There are many significant benefits to installing residential solar panels on your home's roof. With minimal maintenance and long-term reliability, residential solar is an excellent choice.
                        </p>
                    </div>

                    <div style={styles.videoWrapper} className="animate-up delay-400">
                        <video
                            src={appVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={styles.iphoneVideo}
                            title="Klord Energy Mobile App"
                        />
                    </div>
                </div>

                <hr style={styles.separator} className="animate-up delay-300" />

                <div style={styles.grid}>
                    {benefitsData.map((benefit, index) => (
                        <div key={index} style={styles.card} className={`animate-up delay-${(index + 3) * 100 + 300}`}>
                            <h3 style={styles.cardTitle}>{benefit.title}</h3>
                            <p style={styles.cardDescription}>{benefit.description}</p>
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
        /* Gradient from light beige to a warm sunset/peach shade at the bottom */
        background: 'linear-gradient(180deg, #F9F4EC 0%, #F9F4EC 60%, #F2D0A9 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
        color: '#333',
        scrollSnapAlign: 'start', // For scroll snapping
    },
    container: {
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '2rem',
        gap: '2rem',
    },
    headerText: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
    },
    videoWrapper: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        maxHeight: '400px',
    },
    iphoneVideo: {
        width: '100%',
        maxWidth: '220px', // iPhone proportions
        borderRadius: '30px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: '3.5rem',
        fontWeight: '500',
        lineHeight: '1.1',
        letterSpacing: '-1.5px',
        marginBottom: '1.5rem',
    },
    description: {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#555',
        maxWidth: '450px',
    },
    separator: {
        border: 'none',
        height: '1px',
        backgroundColor: '#E0E0E0',
        marginBottom: '3rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2.5rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardTitle: {
        fontSize: '1.5rem',
        fontWeight: '500',
        marginBottom: '1rem',
        letterSpacing: '-0.5px',
    },
    cardDescription: {
        fontSize: '0.95rem',
        lineHeight: '1.6',
        color: '#666',
    }
};

export default Benefits;
