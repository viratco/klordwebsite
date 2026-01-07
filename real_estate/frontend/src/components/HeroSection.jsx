import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay } from 'react-icons/fa';
import './HeroSection.css';
import heroBg from '../assets/hero-bg.jpg';
import property1 from '../assets/property-1.jpg';
import heroImage from '../assets/hero-image.png';

gsap.registerPlugin(ScrollTrigger);

const images = [heroBg, property1, heroImage];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        // Slideshow interval
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 8000);

        // Text Parallax
        if (textRef.current) {
            gsap.to(textRef.current, {
                y: 150, // Move down significantly to lag behind scroll
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-container",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1
                }
            });
        }

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-container">
            <div className="hero-image-wrapper">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Modern Luxury Home ${index + 1}`}
                        className={`hero-image ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
                <div className="hero-overlay">
                    {/* Overlay Content */}
                    <div className="hero-overlay-content" ref={textRef}>
                        <h1 className="hero-title">
                            <span className="hero-text-line line-1">Discover Unparalleled</span>
                            <br />
                            <span className="hero-text-line line-2">
                                Luxury <span className="highlight-text">Living
                                    <svg className="squiggle" viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 10C20 0 40 20 60 10C80 0 100 20 120 10C140 0 160 20 180 10" stroke="#E65100" strokeWidth="3" strokeLinecap="round" />
                                    </svg>
                                </span>
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
