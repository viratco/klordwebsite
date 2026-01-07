import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackgroundGrid from '../components/BackgroundGrid';
import { FaAward, FaHandshake, FaGem, FaChartLine } from 'react-icons/fa';
import '../components/BackgroundGrid.css';
import './InfoPage.css';

const InfoPage = () => {
    return (
        <div className="info-page-container">
            <BackgroundGrid />
            <Navbar />

            <main className="info-content">
                {/* Hero / Intro */}
                <div className="info-hero">
                    <h1 className="info-title">
                        Legacy of <br />
                        Excellence & Trust
                    </h1>
                    <p className="info-subtitle">
                        For over two decades, SbrEstates has defined the standard for ultra-luxury living.
                        We don't just sell properties; we curate lifestyles for the world's most discerning individuals.
                    </p>
                </div>

                {/* Trust & History Section */}
                <section className="trust-section">
                    <div className="trust-content">
                        <span className="year-badge">20+ Years of Mastery</span>
                        <h2 className="section-title">Built on Unshakeable Trust</h2>
                        <p className="trust-text">
                            Since our inception, trustworthiness has been the cornerstone of our identity.
                            We have navigated the complexities of the real estate market with integrity,
                            ensuring that every transaction is transparent and every client is treated like family.
                            Our reputation is not just built on what we sell, but on how we serve.
                        </p>
                        <p className="trust-text">
                            With thousands of successful handovers and a portfolio worth billions,
                            SbrEstates remains the most trusted name in premium real estate.
                            We honor your trust with unwavering dedication to perfection.
                        </p>
                    </div>

                    {/* Visual Card / Stats */}
                    <div className="trust-card">
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
                            <FaAward style={{ fontSize: '3rem', color: '#E65100' }} />
                            <div>
                                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', margin: 0 }}>#1 Rated</h3>
                                <span style={{ color: '#888' }}>Luxury Agency 5 Years in a Row</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <FaChartLine style={{ fontSize: '3rem', color: '#E65100' }} />
                            <div>
                                <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', margin: 0 }}>$5B+</h3>
                                <span style={{ color: '#888' }}>Total Property Value Sold</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="features-grid">
                    <div className="feature-item">
                        <FaGem className="feature-icon" />
                        <h3 className="feature-title">Premium Quality</h3>
                        <p className="feature-desc">
                            We meticulously select only the finest properties that meet our rigorous standards
                            for architecture, design, and location.
                        </p>
                    </div>
                    <div className="feature-item">
                        <FaHandshake className="feature-icon" />
                        <h3 className="feature-title">Client-Centric</h3>
                        <p className="feature-desc">
                            Your vision is our command. Our bespoke service model ensures that your
                            aspirations are met with personalized precision.
                        </p>
                    </div>
                    <div className="feature-item">
                        <FaAward className="feature-icon" />
                        <h3 className="feature-title">Award Winning</h3>
                        <p className="feature-desc">
                            Recognized globally for our excellence in service, innovation, and
                            integrity in the luxury real estate sector.
                        </p>
                    </div>
                </section>


                {/* Directors Section */}
                <section className="directors-section">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        Visionary Leadership
                    </h2>
                    <div className="directors-grid">
                        <div className="director-card">
                            <div className="director-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Director 1"
                                    className="director-image"
                                />
                            </div>
                            <div className="director-info">
                                <h3 className="director-name">Alexander Sterling</h3>
                                <span className="director-role">Founder & CEO</span>
                                <p className="director-bio">
                                    With a vision to redefine luxury, Alexander has steered SbrEstates
                                    to the summit of the real estate world, crafting iconic living spaces for the global elite.
                                </p>
                            </div>
                        </div>

                        <div className="director-card">
                            <div className="director-image-wrapper">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Director 2"
                                    className="director-image"
                                />
                            </div>
                            <div className="director-info">
                                <h3 className="director-name">Victoria Vance</h3>
                                <span className="director-role">Managing Director</span>
                                <p className="director-bio">
                                    Victoria's impeccable taste and strategic prowess ensure that every
                                    property we represent is not just a home, but a masterpiece of design and investment.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >
    );
};

export default InfoPage;
