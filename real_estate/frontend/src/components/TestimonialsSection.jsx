import { useEffect, useRef } from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    // CSS-only animation for the title


    const testimonials = [
        {
            name: 'Anjali Mehta',
            role: 'Luxury Villa Owner',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            text: 'Investing with SBR Estates was the best decision for my portfolio. Their selection of off-market properties is unmatched in the region. Truly a class apart.',
            rating: 5
        },
        {
            name: 'Priya Sharma',
            role: 'IT Entrepreneur',
            image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            text: 'I was looking for a home that reflected my lifestyle, and SBR Estates delivered perfection. The attention to detail in their architectural curation is simply breathtaking.',
            rating: 5
        },
        {
            name: 'Amit Vikram Singh',
            role: 'Real Estate Investor',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            text: 'Transparency and trust are rare in this industry, but SBR Estates sets the gold standard. A seamless buying experience from the first consultation to the final handover.',
            rating: 5
        }
    ];

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-title-wrapper">
                    <svg viewBox="0 0 1200 150" className="testimonials-title-svg">
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                            What Client Says?
                        </text>
                    </svg>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    <img src={testimonial.image} alt={testimonial.name} />
                                    <div className="avatar-badge">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                            <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M2.67004 18.95L7.60004 15.64C8.39004 15.11 9.53004 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="testimonial-info">
                                    <h3>{testimonial.name}</h3>
                                    <p>{testimonial.role}</p>
                                </div>
                                <div className="testimonial-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff6b35">
                                        <path d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z" />
                                        <path d="M9 22V12H15V22" fill="white" />
                                    </svg>
                                </div>
                            </div>

                            <p className="testimonial-text">{testimonial.text}</p>

                            <div className="testimonial-footer">
                                <div className="testimonial-brand">
                                    <span className="brand-icon">S</span>
                                    <span className="brand-name">BR ESTATES</span>
                                </div>
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
