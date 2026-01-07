import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaHome } from 'react-icons/fa'; // Assuming react-icons is available, otherwise use SVG
import './ImageShowcaseSection.css';
import showcase1 from '../assets/showcase_1.png';
import showcase2 from '../assets/showcase_2.png';
import showcase3 from '../assets/showcase_3.png';
import showcase4 from '../assets/showcase_4.png';
import showcase5 from '../assets/showcase_5.png';
import showcase6 from '../assets/showcase_6.png';
import showcase7 from '../assets/showcase_7.png';
import showcase8 from '../assets/showcase_8.png';

// import logo2 from '../assets/logo-2.png';

gsap.registerPlugin(ScrollTrigger);

const ImageShowcaseSection = () => {
    const marqueeRef = useRef(null);
    const topRowRef = useRef(null);
    const bottomRowRef = useRef(null);

    useEffect(() => {
        // Marquee Animation
        const marqueeEl = marqueeRef.current;
        gsap.to(marqueeEl, {
            x: -200,
            ease: "none",
            scrollTrigger: {
                trigger: ".showcase-section",
                start: "top center",
                end: "bottom top",
                scrub: 1
            }
        });

        // Column Parallax Animation Helper
        const animateRow = (container) => {
            if (!container) return;
            const items = container.querySelectorAll('.showcase-item');

            // Odd items (1st and 3rd) - Move slower/up
            gsap.to([items[0], items[2]], {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top center",
                    end: "bottom top",
                    scrub: 1
                }
            });

            // Even items (2nd and 4th) - Move faster/down
            gsap.to([items[1], items[3]], {
                y: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top center",
                    end: "bottom top",
                    scrub: 1
                }
            });
        };

        animateRow(topRowRef.current);
        animateRow(bottomRowRef.current);

    }, []);

    const MarqueeItem = ({ outlined }) => (
        <div className={`marquee-item ${outlined ? 'outlined' : ''}`}>
            <div className="marquee-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
            </div>
            <span>Design Excellence</span>
        </div>
    );

    return (
        <section className="showcase-section">
            <div className="showcase-container" ref={topRowRef}>
                {/* Visual rhythm: 4 distinct vertical strips */}
                <div className="showcase-item">
                    <img src={showcase4} alt="Luxury Dining Detail" />
                </div>
                <div className="showcase-item">
                    <img src={showcase1} alt="Luxury Interior 1" />
                </div>
                <div className="showcase-item">
                    <img src={showcase2} alt="Luxury Detail" />
                </div>
                <div className="showcase-item">
                    <img src={showcase3} alt="Cozy Corner" />
                </div>
            </div>

            <div className="gallery-marquee-wrapper">
                <div className="gallery-marquee" ref={marqueeRef}>
                    {/* Repeat items enough to fill screen and scroll */}
                    <MarqueeItem />
                    <MarqueeItem outlined />
                    <MarqueeItem />
                    <MarqueeItem outlined />
                    <MarqueeItem />
                    <MarqueeItem outlined />
                </div>
            </div>

            <div className="showcase-container bottom-row" ref={bottomRowRef}>
                <div className="showcase-item">
                    <img src={showcase5} alt="Modern Kitchen" />
                </div>
                <div className="showcase-item">
                    <img src={showcase6} alt="Luxury Bathroom" />
                </div>
                <div className="showcase-item">
                    <img src={showcase7} alt="Home Office" />
                </div>
                <div className="showcase-item">
                    <img src={showcase8} alt="Patio Living" />
                </div>
            </div>

            <div className="showcase-logo-text">
                SBR ESTATES
            </div>
        </section>
    );
};

export default ImageShowcaseSection;
