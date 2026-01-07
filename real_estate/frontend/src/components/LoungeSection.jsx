import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LoungeSection.css';
import exteriorImage from '../assets/lounge_exterior.png';
import interiorImage from '../assets/lounge_interior.png';

const LoungeSection = () => {
    const interiorRef = useRef(null);

    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (interiorRef.current && sectionRef.current) {
                const sectionTop = sectionRef.current.offsetTop;
                const sectionHeight = sectionRef.current.offsetHeight;
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;

                // When section enters viewport (bottom of viewport hits top of section)
                const sectionEnterPoint = sectionTop - windowHeight;
                // When section exits viewport (top of viewport passes bottom of section)
                const sectionExitPoint = sectionTop + sectionHeight;

                // Calculate progress: 0 when entering, 1 when exiting
                const scrollProgress = (scrollY - sectionEnterPoint) / (sectionExitPoint - sectionEnterPoint);

                // Clamp between 0 and 1, then scale to pixel range
                // Previous endpoint (180px) is now the START
                // Then slides an additional 180px right (ending at 360px total)
                const clampedProgress = Math.min(1, Math.max(0, scrollProgress));
                const moveX = -50 + (clampedProgress * 250); // Start at -50 (further left), move to 200
                interiorRef.current.style.transform = `translateX(${moveX}px)`;
            }
        };

        handleScroll(); // Initial call
        window.addEventListener('scroll', handleScroll);

        // Parallax for exterior image
        if (sectionRef.current) {
            const exteriorImg = sectionRef.current.querySelector('.lounge-exterior-img');
            gsap.to(exteriorImg, {
                y: 100, // Move down 100px as we scroll
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="lounge-section" ref={sectionRef}>
            <div className="lounge-container">
                {/* Left Side - Slanted Image */}
                <div className="lounge-left">
                    <div className="lounge-exterior-wrapper">
                        <img src={exteriorImage} alt="Modern Commercial Building" className="lounge-exterior-img" />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="lounge-right">
                    <div className="lounge-text-content">
                        <p className="lounge-description">
                            Discover the art of refined living with SBR Estates. We meticulously select properties that embody structural brilliance and aesthetic mastery, creating homes that are not just places to stay, but landmarks of your personal legacy.
                        </p>
                    </div>

                    <div className="lounge-bottom-layout">
                        <h2 className="lounge-big-title">
                            <span className="title-perfect">Architectural</span>
                            <span className="title-property">Mastery</span>
                        </h2>

                        <div className="lounge-interior-wrapper" ref={interiorRef}>
                            <img src={interiorImage} alt="Cozy Lounge Interior" className="lounge-interior-img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoungeSection;
