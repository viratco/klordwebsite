import React, { useRef } from 'react';
import { FaArrowRight, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import './PropertySlider.css';
import config from '../config';

// Images handled dynamically via URL or fallback

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register standard GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

const PropertySlider = () => {
    const sliderRef = useRef(null);
    const [properties, setProperties] = React.useState([]);
    const [selectedProperty, setSelectedProperty] = React.useState(null);

    React.useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch(`${config.API_URL}/api/properties`);
                if (response.ok) {
                    const data = await response.json();
                    setProperties(data);
                }
            } catch (error) {
                console.error('Failed to fetch properties:', error);
            }
        };
        fetchProperties();
    }, []);

    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = direction === 'left' ? -420 : 420;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleCardClick = (property) => {
        setSelectedProperty(property);
    };

    const closeModal = () => {
        setSelectedProperty(null);
    };

    const scrollToContact = (e) => {
        if (e) e.stopPropagation();
        closeModal();

        // Use GSAP for a smoother, "easier" scroll animation
        gsap.to(window, {
            duration: 1.5,
            scrollTo: { y: "#contact", offsetY: 50 },
            ease: "power3.inOut"
        });
    };

    // Helper to get main image
    const getPropertyImage = (prop) => {
        // Handle array of images from DB or fallback
        if (prop.images && prop.images.length > 0) return prop.images[0];
        // Fallback or legacy handling if needed
        return prop.image || 'https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
    };

    return (
        <section className="property-showcase-section">
            <div className="property-header">
                <h2 className="property-title">Curated Residences</h2>
                <p className="property-subtitle">
                    Explore our exclusive selection of premium properties designed for the most discerning lifestyles.
                </p>
            </div>

            <div className="slider-container" ref={sliderRef}>
                {properties.map((prop) => (
                    <div key={prop.id} className="property-card" onClick={() => handleCardClick(prop)}>
                        <div className="card-image-wrapper">
                            <img src={getPropertyImage(prop)} alt={prop.title} className="card-image" />
                        </div>

                        <div className="card-badges">
                            <span className="badge">{prop.type}</span>
                            {prop.status === 'Featured' && <span className="badge featured">Featured</span>}
                        </div>

                        <div className="card-overlay">
                            <div className="card-content">
                                <h3 className="card-title">{prop.title}</h3>
                                <div className="card-location">
                                    <FaMapMarkerAlt />
                                    <span>{prop.location}</span>
                                </div>

                                <div className="card-footer">
                                    {prop.price ? (
                                        <div className="card-price">${prop.price}</div>
                                    ) : (
                                        <button
                                            className="price-request-btn"
                                            onClick={scrollToContact}
                                        >
                                            Price on Request
                                        </button>
                                    )}
                                    <button className="card-btn" aria-label="View Details">
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="scroll-controls">
                <button className="scroll-btn" onClick={() => scroll('left')} aria-label="Scroll Left">
                    <FaArrowLeft />
                </button>
                <button className="scroll-btn" onClick={() => scroll('right')} aria-label="Scroll Right">
                    <FaArrowRight />
                </button>
            </div>

            {/* Details Modal */}
            {selectedProperty && (
                <div className="property-modal-overlay" onClick={closeModal}>
                    <div className="property-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal-btn" onClick={closeModal}>✕</button>

                        <div className="modal-image-wrapper">
                            <img
                                src={getPropertyImage(selectedProperty)}
                                alt={selectedProperty.title}
                                className="modal-image"
                            />
                        </div>

                        <div className="modal-info">
                            <div className="modal-header">
                                <h3 className="modal-title">{selectedProperty.title}</h3>
                                <div className="modal-location">
                                    <FaMapMarkerAlt />
                                    <span>{selectedProperty.location}</span>
                                </div>
                            </div>

                            <div className="modal-price-container">
                                {selectedProperty.price ? (
                                    <div className="modal-price">${selectedProperty.price}</div>
                                ) : (
                                    <button
                                        className="modal-price-btn"
                                        onClick={scrollToContact}
                                    >
                                        Request Price
                                    </button>
                                )}
                            </div>

                            <p className="modal-description">
                                {selectedProperty.description || "Experience the epitome of luxury living in this exclusive residence. Meticulously designed with premium finishes and thoughtful details throughout."}
                            </p>

                            <div className="modal-details-grid">
                                <div className="detail-item">
                                    <span className="detail-label">Type</span>
                                    <span className="detail-value">{selectedProperty.type}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Status</span>
                                    <span className="detail-value">{selectedProperty.status}</span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">ID</span>
                                    <span className="detail-value">#{selectedProperty.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default PropertySlider;
