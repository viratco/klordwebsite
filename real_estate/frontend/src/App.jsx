import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundGrid from './components/BackgroundGrid';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import LoungeSection from './components/LoungeSection';
import ExperienceSection from './components/ExperienceSection';
import FlowingMenu from './components/FlowingMenu';
import TestimonialsSection from './components/TestimonialsSection';
import VIPSection from './components/VIPSection';
import PropertySlider from './components/PropertySlider';
import ImageShowcaseSection from './components/ImageShowcaseSection';
import ContactFormSection from './components/ContactFormSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import InfoPage from './pages/InfoPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import './App.css';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handlePreloaderComplete = () => {
        setIsLoading(false);
    };

    const menuItems = [
        { link: '#', text: 'Property Valuation', image: 'https://picsum.photos/600/400?random=10' },
        { link: '#', text: 'Property Management', image: 'https://picsum.photos/600/400?random=11' },
        { link: '#', text: 'Creative Solutions', image: 'https://picsum.photos/600/400?random=12' },
    ];

    return (
        <>
            {isLoading && <Preloader onLoadingComplete={handlePreloaderComplete} />}
            {!isLoading && (
                <Routes>
                    <Route path="/" element={
                        <main className="main-content">
                            <BackgroundGrid />
                            <Navbar />
                            <HeroSection />
                            <AboutSection />
                            <LoungeSection />
                            <ExperienceSection />
                            <div style={{ height: '600px', position: 'relative', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                                <FlowingMenu items={menuItems} />
                            </div>
                            <TestimonialsSection />
                            <VIPSection />
                            <PropertySlider />
                            <ImageShowcaseSection />
                            <ContactFormSection />
                            <Footer />
                        </main>
                    } />
                    <Route path="/info" element={<InfoPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                </Routes>
            )}
        </>
    );
};

export default App;
