import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './VIPSection.css';
import mapImage from '../assets/black_aesthetic_map.png';

const AnimatedCounter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTime = null;
                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);
                        setCount(Math.floor(progress * end));
                        if (progress < 1) {
                            window.requestAnimationFrame(step);
                        }
                    };
                    window.requestAnimationFrame(step);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [end, duration]);

    return <span ref={countRef}>{count}</span>;
};

const VIPSection = () => {
    return (
        <section className="vip-section">
            <div className="vip-container">
                <div className="vip-content">
                    <h2 className="vip-title">
                        Unlock Access to Off-Market<br />
                        Masterpieces Near You.
                    </h2>

                    <div className="vip-stats-row">
                        <div className="vip-stat">
                            <span className="stat-number">
                                <AnimatedCounter end={98} />%
                            </span>
                            <span className="stat-desc">Client Satisfaction Rate</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="vip-stat">
                            <span className="stat-number">
                                <AnimatedCounter end={150} />+
                            </span>
                            <span className="stat-desc">Exclusive Listings</span>
                        </div>
                    </div>

                    <div className="vip-buttons">
                        <button className="btn-primary">
                            Enquire Now <FaArrowRight className="btn-icon" />
                        </button>
                    </div>
                </div>

                <div className="vip-visual">
                    <div className="map-container">
                        <img
                            src={mapImage}
                            alt="Location Map"
                            className="map-image"
                        />

                        {/* SVG Path Overlay */}
                        <svg className="map-path-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            <path
                                d="M80 30 L65 45 L50 40 L40 65 L20 60"
                                stroke="#ff6b35"
                                strokeWidth="1.5"
                                fill="none"
                                filter="url(#glow)"
                                className="path-main"
                            />

                            <g transform="translate(80, 30)">
                                <circle cx="0" cy="0" r="4" fill="#ff6b35" opacity="0.4" />
                                <circle cx="0" cy="0" r="2" fill="#ff6b35" />
                            </g>
                            <g transform="translate(50, 40)">
                                <circle cx="0" cy="0" r="2" fill="#ff6b35" />
                            </g>
                            <g transform="translate(20, 60)">
                                <circle cx="0" cy="0" r="6" fill="#ff6b35" />
                                <path d="M-3 0 L0 3 L3 0 L0 -3 Z" fill="white" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VIPSection;
