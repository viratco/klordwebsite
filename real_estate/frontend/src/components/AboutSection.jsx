
import { useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
    const badgeRef = useRef(null);

    useEffect(() => {
        let animationFrameId;

        const handleScroll = () => {
            animationFrameId = window.requestAnimationFrame(() => {
                if (badgeRef.current) {
                    const rotation = window.scrollY * 0.15; // Slightly slower for elegance
                    badgeRef.current.style.transform = `rotate(${rotation}deg)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameId) {
                window.cancelAnimationFrame(animationFrameId);
            }
        };
    }, []);

    return (
        <section className="about-section">
            <div className="about-container">
                {/* Left Content */}
                <div className="about-text-content">
                    <span className="about-label">OUR PHILOSOPHY</span>
                    <h2 className="about-headline">
                        Redefining Modern Living Through Exceptional Design & Curated Experiences.
                    </h2>
                </div>

                {/* Right Content - Circular Badge */}
                <div className="about-badge-container">
                    <div className="circular-badge" ref={badgeRef}>
                        <svg viewBox="0 0 100 100" width="100%" height="100%">
                            <defs>
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="11.5" fontWeight="bold" fill="white" letterSpacing="2">
                                <textPath xlinkHref="#circlePath">
                                    SBR ESTATES • EXCELLENCE IN LIVING •
                                </textPath>
                            </text>
                        </svg>
                        <div className="badge-center-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L12 22M2 12L22 12M4.929 4.929L19.071 19.071M19.071 4.929L4.929 19.071" stroke="#FF3B30" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
