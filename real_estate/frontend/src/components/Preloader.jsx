import { useEffect, useState } from 'react';
import './Preloader.css';
import logo from '../assets/logo.png';

const Preloader = ({ onLoadingComplete }) => {
    const [shouldRender, setShouldRender] = useState(true);
    const [isSlidingUp, setIsSlidingUp] = useState(false);

    useEffect(() => {
        // Total animation time sequence
        // 0s-1.5s: Logo reveal
        // 1.5s: Start sliding up
        // 2.5s: Animation complete

        // Start exit animation (curtain raise)
        const slideTimer = setTimeout(() => {
            setIsSlidingUp(true);
        }, 2200);

        // Unmount component
        const removeTimer = setTimeout(() => {
            setShouldRender(false);
            if (onLoadingComplete) onLoadingComplete();
        }, 3200); // Allow time for slide up transition

        return () => {
            clearTimeout(slideTimer);
            clearTimeout(removeTimer);
        };
    }, [onLoadingComplete]);

    if (!shouldRender) return null;

    return (
        <div className={`preloader-container ${isSlidingUp ? 'slide-up' : ''}`}>
            <div className="preloader-content">
                <div className="preloader-logo">
                    <div className="preloader-icon">
                        <img src={logo} alt="Sbrrealestate Logo" />
                    </div>
                </div>
                <div className="loading-bar-container">
                    <div className="loading-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
